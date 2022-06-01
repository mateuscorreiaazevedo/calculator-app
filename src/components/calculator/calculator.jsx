import { useState } from 'react'
import KeyPad from '../keypad/keypad'
import { Display } from '../ui/display/display'

export default function Calculator () {
  const [num, setNum] = useState('')
  const [oldNum, setOldNum] = useState('')
  const [operator, setOperator] = useState('')
  const [clickedOperator, setClickedOperator] = useState(false)

  function toNumber () {
    return {
      currentValue: Number(num),
      previousValue: Number(oldNum)
    }
  }

  function clickNumber (e) {
    const { value } = e.target

    setNum(clickedOperator ? value : num + value)

    if (clickedOperator) {
      setOldNum(num)
      setClickedOperator(false)
    }
  }

  function clickReset () {
    setNum('')
    setOldNum('')
    setOperator('')
  }

  function clickInvert () {
    setNum((num * (-1)))
  }

  function clickPercent (e) {
    const { currentValue, previousValue } = toNumber()
    const calc = (previousValue * currentValue) / 100
    const result = operator === '-' ? previousValue - calc : previousValue + calc

    setNum((result).toString())
  }

  function clickOperator (e) {
    const { value } = e.target
    setClickedOperator(true)
    setOperator(value)
  }

  function calculate () {
    let result
    const { currentValue, previousValue } = toNumber()

    switch (operator) {
      case '/':
        result = previousValue / currentValue
        break
      case '*':
        result = previousValue * currentValue
        break
      case '+':
        result = previousValue + currentValue
        break
      case '-':
        result = previousValue - currentValue
        break
    }
    setNum((result.toFixed(5)).toString())
  }

  return (
        <div>
            <Display screen={num}/>
            <KeyPad
                clickNumber={clickNumber}
                clickInvert={clickInvert}
                clickReset={clickReset}
                clickPercent={clickPercent}
                clickEquals={calculate}
                clickOperator={clickOperator}
            />
        </div>
  )
}
