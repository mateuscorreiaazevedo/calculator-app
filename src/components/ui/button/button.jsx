import { Key } from './button.styled'

export const Button = (props) => {
  const { text, classN, ...rest } = props

  return <Key className={classN} {...rest}>{text}</Key>
}
