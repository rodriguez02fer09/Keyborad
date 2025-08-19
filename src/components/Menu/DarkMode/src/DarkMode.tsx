import {useContext} from 'react'
import {AppContext} from '../../../../context/AppContext'
import '../index.scss'
import DarkModeNormal from '../../../../assets/dar-mode-normal.svg'
import DarkModeDark from '../../../../assets/dark-mode-hover.svg'

const DarkMode = () => {
  const {toggleTheme, isDark} = useContext(AppContext)

  return (
    <div className="main-darkMode" onClick={toggleTheme}>
      <img
        src={isDark() ? DarkModeDark : DarkModeNormal}
        alt="Toggle dark mode"
      />
    </div>
  )
}

export default DarkMode
