import { Button } from '../../ui/button/button'
import { FunctionKeyStyled } from './function-key.styled'

export const FunctionKey = () => {
  return (
        <FunctionKeyStyled>
            <Button className="key-reset" text='C' />
            <Button className="key-parenthesses key-blue" text='()' />
            <Button className="key-percent key-blue" text='%' />
        </FunctionKeyStyled>
  )
}
