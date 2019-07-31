import LogData from "./log";
import MezzuritePlugin from "./index";
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

describe('LogData', () => {
    it('if mezzurite plugin instance and event data is null, then, log data should return boolean false ', () => {
      expect(LogData(null, null)).toBeFalsy()
    })
})

describe('LogData', () => {
    it('if mezzurite plugin instance and event data is undefined, then, log data should return boolean false ', () => {
      expect(LogData(undefined, undefined)).toBeFalsy()
    })
})

describe('LogData', () => {
    it('if mezzurite plugin instance is undefined, then, log data should return boolean false ', () => {
        const ai = new ApplicationInsights({config: {extensions: [MezzuritePlugin], instrumentationKey: "iKey", maxBatchInterval: 100, disableFetchTracking: false}});
        ai.loadAppInsights();
        var eventData = {
            "3891df63-80ff-4595-bf10-97843b9e2bb2":{startTime : 1.25,
            endTime: 2}
            }; 
        expect(LogData(MezzuritePlugin, eventData)).toBeTruthy()
    })
})