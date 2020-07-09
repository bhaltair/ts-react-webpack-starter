import * as React from 'react'
import LogoImg from 'assets/logo.jpg'
import style from './style.css'
export interface Props {
  name: string
}

function Hello({ name }: Props) {
  if (process.env.NODE_ENV === 'development') {
    console.log('Welcome to development');
  }
  return (
    <div className={ style.hello }>
      <img src={ LogoImg } alt="logo.jpg"/>
      <div className="greeting">
        Hello { name }
      </div>
    </div>
  )
}

export default Hello
