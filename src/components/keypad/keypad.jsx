import { DigitKey, KeyPadStyled, NumberKey, OperatorKey, FunctionKey } from './keypad.styled'
import { Button } from '../ui/button/button'

export default function KeyPad (props) {
  const {
    clickReset,
    clickNumber,
    clickInvert,
    clickPercent,
    clickEquals,
    clickOperator
  } = props

  const toEnter = (e) => {
    if (e.code === 'Enter') {
      clickOperator()
    }
  }

  return (
        <KeyPadStyled>
            <DigitKey>
                <FunctionKey>
                  <Button className="key-reset" text='C' onClick={clickReset} />
                  <Button className="key-invert key-blue" text='+/-' onClick={clickInvert} />
                  <Button className="key-percent key-blue" text='%' value='%' onClick={clickPercent}/>
                </FunctionKey>
                <NumberKey>
                  <Button className="key-0" text='0' value='0' onClick={clickNumber}/>
                  <Button className="key-dot" text='.' value='.' onClick={clickNumber}/>
                  <Button className="key-1" text='1' value='1' onClick={clickNumber}/>
                  <Button className="key-2" text='2' value='2' onClick={clickNumber}/>
                  <Button className="key-3" text='3' value='3' onClick={clickNumber}/>
                  <Button className="key-4" text='4' value='4' onClick={clickNumber}/>
                  <Button className="key-5" text='5' value='5' onClick={clickNumber}/>
                  <Button className="key-6" text='6' value='6' onClick={clickNumber}/>
                  <Button className="key-7" text='7' value='7' onClick={clickNumber}/>
                  <Button className="key-8" text='8' value='8' onClick={clickNumber}/>
                  <Button className="key-9" text='9' value='9' onClick={clickNumber}/>
                </NumberKey>
            </DigitKey>
            <OperatorKey>
              <Button className="key-divide key-blue" text='÷' value='/' onClick={clickOperator}/>
              <Button className="key-multiply key-blue" text='×' value='*' onClick={clickOperator}/>
              <Button className="key-sum key-blue" text='+' value='+' onClick={clickOperator}/>
              <Button className="key-sub key-blue" text='-' value='-' onClick={clickOperator}/>
              <Button className="key-equal key-blue" text='=' onClick={clickEquals} onKeyUp={toEnter} />
            </OperatorKey>
        </KeyPadStyled>
  )
}
