// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import isValidEventData from './validation';
import transformEventData from './transformData';

function logData (MezzuritePlugin, eventData) {
  let logStatus = false;
  if (isValidEventData(eventData)) {
    for (const component in eventData) {
      const transformedData = transformEventData(eventData[component]);
      if (transformedData != null) {
        MezzuritePlugin.appInsights.trackEvent({ name: 'MezzuriteEvent' }, transformedData);
        logStatus = true;
      }
    }
  }
  return logStatus;
}

export default logData;
