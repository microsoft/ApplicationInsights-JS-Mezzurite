function IsValidEventData (eventData) {
  
  if(eventData === null || eventData === undefined){
    return false;
  }

  for (var component in eventData) {
    if (eventData[component].startTime === undefined ) {
      return false;
    }
  }
  return true;
}
  export default IsValidEventData