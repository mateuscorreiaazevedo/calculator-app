import { Button } from '../../ui/button/button'
import { NumberKeyStyled } from './number-key.styled'

export const NumberKey = (props) => {
  const { handleClick } = props

  return (
        <NumberKeyStyled>
            <Button className="key-0" text='0' value='0' onClick={handleClick}/>
            <Button className="key-dot" text='.' value='.' onClick={handleClick}/>
            <Button className="key-1" text='1' value='1' onClick={handleClick}/>
            <Button className="key-2" text='2' value='2' onClick={handleClick}/>
            <Button className="key-3" text='3' value='3' onClick={handleClick}/>
            <Button className="key-4" text='4' value='4' onClick={handleClick}/>
            <Button className="key-5" text='5' value='5' onClick={handleClick}/>
            <Button className="key-6" text='6' value='6' onClick={handleClick}/>
            <Button className="key-7" text='7' value='7' onClick={handleClick}/>
            <Button className="key-8" text='8' value='8' onClick={handleClick}/>
            <Button className="key-9" text='9' value='9' onClick={handleClick}/>
        </NumberKeyStyled>
  )
}
