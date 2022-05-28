import { Button } from '../../ui/button/button'
import { OperatorKeyStyled } from './operator-key.styled'

export const OperatorKey = () => {
  return (
        <OperatorKeyStyled>
            <Button className="key-divide key-blue" text='÷'/>
            <Button className="key-multiply key-blue" text='x'/>
            <Button className="key-sum key-blue" text='+'/>
            <Button className="key-sub key-blue" text='-'/>
            <Button className="key-equal key-blue" text='='/>
        </OperatorKeyStyled>
  )
}
