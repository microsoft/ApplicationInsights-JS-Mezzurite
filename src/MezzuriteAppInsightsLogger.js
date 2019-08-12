// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import onComponentsChanged from './onComponentsChanged';

class MezzuriteAppInsightsLogger {
  constructor (ai) {
    this.listener = e => onComponentsChanged(e, ai);
  }

  initialize () {
    window.addEventListener('mezzurite/componentsChanged', this.listener);
  }

  dispose () {
    window.removeEventListener('mezzurite/componentsChanged', this.listener);
  }
}

export default MezzuriteAppInsightsLogger;
