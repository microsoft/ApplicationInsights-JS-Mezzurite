import IsValidEventData from "./validation"

describe('IsValidEventData', () => {
    it('if event data is undefined then validate event data should return boolean false ', () => {
      expect(IsValidEventData(undefined)).toBeFalsy()
    })
})
describe('IsValidEventData', () => {
    it('if event data is null then validate event data should return boolean false ', () => {
      expect(IsValidEventData(null)).toBeFalsy()
    })
})
describe('IsValidEventData', () => {
    it('if start time in event data is undefined then validate event data should return boolean false ', () => {
      var eventData = {
        "3891df63-80ff-4595-bf10-97843b9e2bb2":{startTime : undefined}
        }; 
      expect(IsValidEventData(eventData)).toBeFalsy()
    })
})
describe('IsValidEventData', () => {
    it('if start time in event data is a valid value then validate event data should return boolean true ', () => {
      var eventData = {
        "3891df63-80ff-4595-bf10-97843b9e2bb2":{startTime : 1.25}
        }; 
      expect(IsValidEventData(eventData)).toBeTruthy()
    })
})