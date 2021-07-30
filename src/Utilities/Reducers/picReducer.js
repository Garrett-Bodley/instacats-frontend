export const picReducer = (
  state = {
    pics: [], 
    dict: {}
  }, action) => {
  switch(action.type){
    case 'ADD_PICS':
      const newDict = Object.assign({}, state.dict)
      const uniquePics = action.payload.reduce((accumulator, pic) => {
        if(!newDict[pic.imgur_id]){
          newDict[pic.imgur_id] = true;
          accumulator.push(pic)
        }
        return accumulator
      }, [])
      return  {pics: [...state.pics, ...uniquePics], dict: newDict}
    default: 
      return state
  }
}