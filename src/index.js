// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import onComponentsChanged from './onComponentsChanged';

function initialize (ai) {
  const listener = e => onComponentsChanged(e, ai);
  window.addEventListener('mezzurite/componentsChanged', listener);
  return listener;
}

function dispose (listener) {
  window.removeEventListener('mezzurite/componentsChanged', listener);
}

export default {
  initialize,
  dispose
};
