import { DigitKey, KeyPadStyled } from './keypad.styled'
import { OperatorKey } from './operator-key/operator-key'
import { NumberKey } from './number-key/number-key'
import { FunctionKey } from './function-key/function-key'
import { useState } from 'react'

export default function KeyPad () {
  const [num, setNum] = useState()

  function handleClick (e) {
    const { value } = e.target
    setNum(Number(value))
  }
  console.log(num)
  return (
        <KeyPadStyled>
            <DigitKey>
                <FunctionKey />
                <NumberKey handleClick={handleClick} />
            </DigitKey>
            <OperatorKey />
        </KeyPadStyled>
  )
}
