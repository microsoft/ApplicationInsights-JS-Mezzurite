import LogData from './log'

function attachListener(){
  window.addEventListener('mezzurite/componentsChanged', (e) => { 
    MezzuritePlugin.log(MezzuritePlugin, e.detail); 
  } , false);
}

function setNextPlugin (next) {
  if (next) {
    MezzuritePlugin._nextPlugin = next;
  }
}

function processTelemetry (item) {
    // use the generated page id for parent Id and use props.id as operation Id
  if (item.tags['ai.operation.id']) {
    let parentId = item.tags['ai.operation.id'];
    let origId = item.baseData && item.baseData.properties && item.baseData.properties.id ? item.baseData.properties.id : undefined;
    if (origId) {
      item.tags['ai.operation.id'] = origId;
      delete item.baseData.properties.id;
      item.tags['ai.operation.parentId'] = parentId;
    }
  }
  if (MezzuritePlugin._nextPlugin && MezzuritePlugin._nextPlugin.processTelemetry) {
    MezzuritePlugin._nextPlugin.processTelemetry(item);
  }
}

function initialize (config, core, extensions) {
  extensions.forEach((e => {
    if (e.identifier === 'ApplicationInsightsAnalytics') {
      MezzuritePlugin._appInsights = e;
    }
  }));
}

const MezzuritePlugin = {
  identifier : "MezzuritePlugin",
  processTelemetry : processTelemetry,
  setNextPlugin : setNextPlugin,
  initialize : initialize,
  priority : 172,
  _appInsights : null,
  _nextPlugin : null,
  Initialize : attachListener,
  log : LogData
}

export default MezzuritePlugin