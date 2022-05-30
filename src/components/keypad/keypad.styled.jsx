import styled from 'styled-components'

export const KeyPadStyled = styled.div`
    height: 440px;
    max-width: 320px;
    background-color: #0C2742;
    border-radius: 0 0 20px 20px;
    border-top: 2px solid #3498d8;
    display: flex;
    .key-blue {
        color: #3498d8;
    }
    .key-0 {
        width: 10rem;
        border-radius: 0 0 0 20px;
    }
        
`
export const DigitKey = styled.div`
    flex-grow: 1;
`
export const NumberKey = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
`
export const OperatorKey = styled.div`
    display: flex;
    flex-direction: column;
    .key-equal {
        border-radius: 10px;
        background: #2D9EFA;
        color: #fff;
        width: 4rem;
        height: 3rem;
        padding: 0;
        margin: 2.75rem .5rem 1.5rem;
    }
`
export const FunctionKey = styled.div`
    .key-reset {
        color: #943E1D;
    }
`
