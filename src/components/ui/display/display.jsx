import { DisplayStyled } from './display.styled'

export const Display = ({ screen }) => {
  return (
    <DisplayStyled value={screen}>
      {screen && (
        screen
      )}
    </DisplayStyled>
  )
}
