import Calculator from '../calculator/calculator'
import { ContainerApp } from './app.styled'

export default function App () {
  return (
    <ContainerApp>
      <h3 className="title">Calculator</h3>
      <Calculator/>
      <p className='copyright'>By: Mateus Azevedo</p>
    </ContainerApp>
  )
}
