import styled from 'styled-components'
import { PersonCircle } from '@styled-icons/bootstrap'

const Div = styled.div`
`

const Avi = styled(PersonCircle)`
  color: #dbdbdb;
  height: 32px;
  width: 32px;
`
const Avatar = () => {
  return(
    <Div>
      <Avi/>
    </Div>
  )
}

export default Avatar
