import React, {useContext} from 'react'
import {AppContext} from '../../../../context/index'
import '../index.scss'
import DarkModeNormal from '../../../../assets/dar-mode-normal.svg'
import DarkModeDark from '../../../../assets/dark-mode-hover.svg'

const DarkMode = () => {
  const {toggleTheme, isDark} = useContext(AppContext)

  return (
    <div className="main-darkMode" onClick={toggleTheme}>
      <img src={isDark() ? DarkModeDark : DarkModeNormal} />
    </div>
  )
}

export default DarkMode
