// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

function onComponentsChanged (event, ai) {
  if (event != null) {
    const components = event.detail;
    for (const key in components) {
      const component = components[key];

      if (component != null && component.startTime != null && component.endTime != null) {
        ai.trackEvent({ name: 'MezzuriteComponentTiming' }, component);
        // TODO: remove component from mezzurite store
      }
    }
  }
}

export default onComponentsChanged;
