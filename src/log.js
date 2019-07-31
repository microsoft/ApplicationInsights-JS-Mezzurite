import IsValidEventData from './validation'
import TransformEventData from "./transformData"

function LogData (MezzuritePlugin, eventData) {
  let logStatus = false;
  if(IsValidEventData(eventData)){
    for (var component in eventData) {
      var logData = TransformEventData(eventData[component]);
      if(logData != null){
        MezzuritePlugin._appInsights.trackEvent({name:"MezzuriteEvent"}, logData);
        logStatus = true;
      }
    }
  }
  return logStatus;
}
  
  export default LogData