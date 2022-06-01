import styled from 'styled-components'

const displayFormated = ({ value }) => {
  let result
  const expression = value.length
  if (expression < 9) {
    result = '3.5rem'
  } else if (expression <= 10) {
    result = '3rem'
  } else if (expression <= 12) {
    result = '2.6rem'
  } else if (expression < 16) {
    result = '2rem'
  } else {
    result = '1.8rem'
  }
  return result
}

export const DisplayStyled = styled.div`
    display: flex;
    height: 180px;
    max-width: 320px;
    color: #fff;
    font-size: ${displayFormated};
    justify-content: flex-end;
    align-items: flex-end;
    padding: 1rem 2rem;
    
`
