function TransformEventData (componentData) {
  let startTime = null, endTime = null;
  if (componentData!= null && componentData && componentData.startTime) {
    startTime = componentData.startTime;
  }
  if (componentData!= null && componentData && componentData.endTime) {
    endTime = componentData.endTime;
  }
  
  if(componentData == null || componentData === undefined || startTime == null){
    return null;
  } 
  else{
    return {
      startTime :startTime,
      endTime : endTime
    }
  }
}
  
  export default TransformEventData