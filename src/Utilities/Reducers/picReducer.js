export const picReducer = (
  state = {
    pics: [], 
    dict: {},
    loading: false
  }, action) => {
  switch(action.type){
    case 'ADD_PICS':
      const newDict = {...state.dict}
      const uniquePics = action.payload.reduce((accumulator, pic) => {
        if(!newDict[pic.imgur_id]){
          newDict[pic.imgur_id] = true;
          accumulator.push(pic)
        }
        return accumulator
      }, [])
      return  {...state, pics: [...state.pics, ...uniquePics], dict: newDict, loading: false}
    case 'LOADING':
      return {...state, loading: true}
    default: 
      return state
  }
}