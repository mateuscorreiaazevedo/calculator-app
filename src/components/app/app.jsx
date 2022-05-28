import styled from 'styled-components'
// import { ContainerApp } from './app.styled'

const ContainerApp = styled.div`
  position: relative;
  background-color: #0C263B;
  margin: 10% auto;
  width: 320px;
  height: 620px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  .title {
    text-align: center;
    padding-top: .5rem;
    color: #fff;
    font-size: 1rem;
  }
  .display {
    display: flex;
    height: 180px;
    max-width: 320px;
    color: #fff;
    font-size: 3.5rem;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 1rem 2rem;
  }
  .keypad {
    height: 440px;
    max-width: 320px;
    background-color: #0C2742;
    border-radius: 0 0 20px 20px;
    border-top: 2px solid #3498d8;
    display: flex;
  }
  .operator-key {
    display: flex;
    flex-direction: column;
  }
  .digit-key {
    flex-grow: 1;
  }
  .function-key {

  }
  .key {
    font-size: 2rem;
    border: none;
    background: none;
    color: #fff;
    width: 5rem;
    height: 5.4rem;
    text-align: center;
    transition: all 300ms ease;
    &:hover {
      background: #0C263B;
    }
  }
  .key-blue {
    color: #3498d8;
  }
  .number-key {
    display: flex;
    flex-wrap: wrap-reverse;
  }
  .key-0 {
    width: 10rem;
    border-radius: 0 0 0 20px;
  }
  .key-equal {
    border-radius: 0 0 20px 0;

  }
`
export default function App () {
  return (
    <ContainerApp>
      <h3 className="title">Calculator</h3>
      <div className="display">0</div>
      <div className="keypad">
        <div className="digit-key">
          <div className="function-key">
            <button className="key key-reset">C</button>
            <button className="key key-blue">()</button>
            <button className="key key-percent key-blue">%</button>
          </div>
          <div className="number-key">
            <button className="key key-0">0</button>
            <button className="key key-dot">.</button>
            <button className="key key-1">1</button>
            <button className="key key-2">2</button>
            <button className="key key-3">3</button>
            <button className="key key-4">4</button>
            <button className="key key-5">5</button>
            <button className="key key-6">6</button>
            <button className="key key-7">7</button>
            <button className="key key-8">8</button>
            <button className="key key-9">9</button>
          </div>
        </div>
        <div className="operator-key">
          <button className="key key-divide key-blue">÷</button>
          <button className="key key-multiply key-blue">x</button>
          <button className="key key-sum key-blue">+</button>
          <button className="key key-sub key-blue">-</button>
          <button className="key key-equal key-blue">=</button>
        </div>
      </div>
    </ContainerApp>
  )
}
