// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import logData from './log';
import MezzuritePlugin from './index';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

describe('logData', () => {
  it('if mezzurite plugin instance and event data is null, then, log data should return boolean false ', () => {
    expect(logData(null, null)).toBeFalsy();
  });
  it('if mezzurite plugin instance and event data is undefined, then, log data should return boolean false ', () => {
    expect(logData(undefined, undefined)).toBeFalsy();
  });
  it('if mezzurite plugin instance is undefined, then, log data should return boolean false ', () => {
    const ai = new ApplicationInsights({ config: { extensions: [MezzuritePlugin], instrumentationKey: 'iKey', maxBatchInterval: 100, disableFetchTracking: false } });
    ai.loadAppInsights();
    var eventData = {
      '3891df63-80ff-4595-bf10-97843b9e2bb2': { startTime: 1.25,
        endTime: 2 }
    };
    expect(logData(MezzuritePlugin, eventData)).toBeTruthy();
  });
});
