// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
function transformEventData (componentData) {
  let startTime = null; let endTime = null;
  if (componentData != null && componentData && componentData.startTime) {
    startTime = componentData.startTime;
  }
  if (componentData != null && componentData && componentData.endTime) {
    endTime = componentData.endTime;
  }

  if (componentData == null || componentData === undefined || startTime == null) {
    return null;
  } else {
    return {
      startTime: startTime,
      endTime: endTime
    };
  }
}

export default transformEventData;
