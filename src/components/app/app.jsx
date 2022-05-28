import KeyPad from '../keypad/keypad'
import { Display } from '../ui/display/display'
import { ContainerApp } from './app.styled'

export default function App () {
  return (
    <ContainerApp>
      <h3 className="title">Calculator</h3>
      <Display />
      <KeyPad />
    </ContainerApp>
  )
}
