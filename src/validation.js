// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
function isValidEventData (eventData) {
  var isValidData = true;
  if (eventData !== null) {
    for (const component in eventData) {
      if (eventData[component].startTime === undefined) {
        isValidData = false;
      }
    }
  }
  return isValidData;
}
export default isValidEventData;
