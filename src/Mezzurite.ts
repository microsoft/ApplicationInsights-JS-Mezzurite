// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import {ITelemetryPlugin, ITelemetryItem, IConfiguration,
        IAppInsightsCore } from '@microsoft/applicationinsights-core-js';

/**
 * Application Insights PlugIn for Mezzurite Timings
 */
export class MezzuritePlugIn implements ITelemetryPlugin {
  private _appInsights: any;
  private _nextPlugin: ITelemetryPlugin;

  public constructor () {
    (window as any).addEventListener('mezzurite/componentsChanged', (e) => { 
      this.log(e.detail); 
    } , false);
  }

    /**
     * Returns this plugin
     */
  public plugin (): ITelemetryPlugin {
    return this;
  }

    /**
     * Name of our plugin
     */
  public identifier: string = 'MezzuritePlugin';

    /**
     * No Op, needed for interface
     * @param item incoming telemetry item.
     */
  public processTelemetry (item: ITelemetryItem) {

        // use the generated page id for parent Id and use props.id as operation Id
    if (item.tags['ai.operation.id']) {
      let parentId = item.tags['ai.operation.id'];
      let origId = item.baseData && item.baseData.properties && item.baseData.properties.id ? item.baseData.properties.id : undefined;
      if (origId) {
        item.tags['ai.operation.id'] = origId;
        delete item.baseData.properties.id;
        item.tags['ai.operation.parentId'] = parentId;
      }
    }

    if (this._nextPlugin && this._nextPlugin.processTelemetry) {
      this._nextPlugin.processTelemetry(item);
    }
  }

    /**
     * Just grab the next plugIn
     * @param next Next PlugIn to process
     */
  public setNextPlugin (next: ITelemetryPlugin) {
    if (next) {
      this._nextPlugin = next;
    }
  }

    /**
     * This method gets an instance of the ApplicationInsightsAnalytics plugIn so that we can send our logs
     * @param config AppInsights Config
     * @param core AppInsight Core Lib
     * @param extensions AppInsights Extensions
     */
  public initialize (config: IConfiguration, core: IAppInsightsCore, extensions: ITelemetryPlugin[]) {
    extensions.forEach((e => {
      if (e.identifier === 'ApplicationInsightsAnalytics') {
        this._appInsights = e;
      }
    }));
  }

    /**
     *
     * @param e This is the telemetry Object from Mezzurite. It supports the following:
     *          startTime: is captured as soon as components starts mounting on the DOM
     *          endTime: is captured after the component has finished loading on DOM
     *          name: component name
     */
  public log (e: any) {

  var startTime: any, endTime: any;
// We need a custom logic here for when to send the start and end events to AppInsights. For basic, working I'm sending it for all the events listened. We need to define a duration or 
// have a logic to wait for the specific end event for each component and then log it to AppInsights.
    for (var component in e) {
      if (e[component].startTime) {
        startTime = e[component].startTime;
      }
      if (e[component].endTime) {
        endTime = e[component].endTime;
      }
      //push data to App Insights as custom events with name: MezzuriteEvent
      this._appInsights.trackEvent({name:"MezzuriteEvent"}, { startTime: startTime, endTime: endTime });
    }
  }

  public priority: number = 172;
}
