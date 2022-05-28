import { DigitKey, KeyPadStyled } from './keypad.styled'
import { OperatorKey } from './operator-key/operator-key'
import { NumberKey } from './number-key/number-key'
import { FunctionKey } from './function-key/function-key'

export default function KeyPad () {
  return (
        <KeyPadStyled>
            <DigitKey>
                <FunctionKey />
                <NumberKey />
            </DigitKey>
            <OperatorKey />
        </KeyPadStyled>
  )
}
