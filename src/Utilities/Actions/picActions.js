const PIC_URL = "http://localhost:3001/pictures"

export const getPicsByPageNum = (pageNum = 1) => {
  const configObj = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
  return (dispatch) => {
    dispatch(loading())
    fetch(PIC_URL + `?page=${pageNum}`, configObj).then(resp => resp.json()).then(json => {
      dispatch(addPics(json))
    })
  }
}

export const addPics = (pics) => {
  return {type: 'ADD_PICS', payload: pics}
}

const loading = () => {
  return {type: 'LOADING'}
}