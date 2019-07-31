import TransformEventData from './transformData'

describe('TransformEventData', () => {
  it('if component data is undefined then transform event data should return null ', () => {
    var componentData = undefined;
    expect(TransformEventData(componentData)).toBeNull()
  })

  it('if start time of a component is undefined then transform event data should return null ', () => {
    var componentData = {
        startTime : undefined
    }
    expect(TransformEventData(componentData)).toBeNull()
  })

  it('Should transform the input object to the boject shape as expected', () => {
    var componentData = {
        startTime : 1.25,
        endTime: 2
    } 
    expect(TransformEventData(componentData)).toMatchObject({
      startTime: 1.25,
      endTime: 2
    })
  })
})