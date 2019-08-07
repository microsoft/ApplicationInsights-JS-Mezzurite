// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import logData from './log';

function attachListener () {
  window.addEventListener('mezzurite/componentsChanged', (e) => {
    MezzuritePlugin.log(MezzuritePlugin, e.detail);
  }, false);
}

function setNextPlugin (next) {
  if (next) {
    MezzuritePlugin.nextPlugin = next;
  }
}

function processTelemetry (item) {
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
  if (MezzuritePlugin.nextPlugin && MezzuritePlugin.nextPlugin.processTelemetry) {
    MezzuritePlugin.nextPlugin.processTelemetry(item);
  }
}

function initialize (config, core, extensions) {
  extensions.forEach(e => {
    if (e.identifier === 'ApplicationInsightsAnalytics') {
      MezzuritePlugin.appInsights = e;
    }
  });
}

const MezzuritePlugin = {
  appInsights: null,
  identifier: 'MezzuritePlugin',
  initialize: initialize,
  initializePlugin: attachListener,
  log: logData,
  nextPlugin: null,
  priority: 172,
  processTelemetry: processTelemetry,
  setNextPlugin: setNextPlugin
};

export default MezzuritePlugin;
