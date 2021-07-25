const PIC_URL = "http://localhost:3001/pictures"

export const getPics = () => {
  const configObj = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  return dispatch => {
    fetch(PIC_URL + "?page=1", configObj).then(resp => resp.json()).then(json => {
      debugger
      dispatch(addPics(json))
    })
  }
}

export const addPics = (pics) => {
  return {type: 'ADD_PICS', payload: pics}
}