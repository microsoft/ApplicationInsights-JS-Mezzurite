// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import transformEventData from './transformData';

describe('transformEventData', () => {
  it('if component data is undefined then transform event data should return null ', () => {
    var componentData;
    expect(transformEventData(componentData)).toBeNull();
  });

  it('if start time of a component is undefined then transform event data should return null ', () => {
    var componentData = {
      startTime: undefined
    };
    expect(transformEventData(componentData)).toBeNull();
  });

  it('Should transform the input object to the boject shape as expected', () => {
    var componentData = {
      startTime: 1.25,
      endTime: 2
    };
    expect(transformEventData(componentData)).toMatchObject({
      startTime: 1.25,
      endTime: 2
    });
  });
});
