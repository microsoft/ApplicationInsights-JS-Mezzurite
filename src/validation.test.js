// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import isValidEventData from './validation';

describe('isValidEventData', () => {
  it('if event data is undefined then validate event data should return boolean false ', () => {
    expect(isValidEventData(undefined)).toBeFalsy();
  });
  it('if event data is null then validate event data should return boolean false ', () => {
    expect(isValidEventData(null)).toBeFalsy();
  });
  it('if start time in event data is undefined then validate event data should return boolean false ', () => {
    var eventData = {
      '3891df63-80ff-4595-bf10-97843b9e2bb2': { startTime: undefined }
    };
    expect(isValidEventData(eventData)).toBeFalsy();
  });
  it('if start time in event data is a valid value then validate event data should return boolean true ', () => {
    var eventData = {
      '3891df63-80ff-4595-bf10-97843b9e2bb2': { startTime: 1.25 }
    };
    expect(isValidEventData(eventData)).toBeTruthy();
  });
});
