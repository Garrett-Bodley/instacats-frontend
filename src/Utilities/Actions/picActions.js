const PIC_URL = "http://localhost:3001/pictures"

export const getPics = () => {
  const configObj = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  fetch(PIC_URL, configObj).then(resp => resp.json()).then(json => {
    debugger
  })
}