import React, {useContext} from 'react'
import '../index.scss'
import DarkMode from '../DarkMode/src/DarkMode'

import LineVertical from '../../../assets/line-vertical.svg'
import ModeFonts from '../ModeFonts'
import IconBook from '../../../assets/iconBook.svg'
import {AppContext} from '../../../context/AppContext'

const Menu = (): JSX.Element => {
  const {theme, fontStyle} = useContext(AppContext)

  const defaultClass = 'containMode'

  return (
    <div className={`${defaultClass} ${defaultClass}--${theme}`}>
      <div
        className={`${defaultClass}__IconBook ${defaultClass}__IconBook--${theme}`}
      >
        <img src={IconBook} alt="" />
      </div>
      <ModeFonts />
      <DarkMode />
      <div className={`${defaultClass}__line ${defaultClass}__line--${theme}`}>
        <img src={LineVertical} alt="" />
      </div>
    </div>
  )
}

export default Menu
