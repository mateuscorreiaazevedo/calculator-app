import { DisplayStyled } from './display.styled'

export const Display = ({ screen }) => {
  return (
    <DisplayStyled>
      {screen && (
        screen
      )}
    </DisplayStyled>
  )
}
