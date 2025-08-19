import {useState, useContext} from 'react'
import '../index.scss'
import ContItemFonts from '../../ContItem-Fonts/index.js'
import ItemFont from '../../ItemFont'
import {AppContext} from '../../../../context/AppContext'

type FontsOption = {
  label: string
  font: string
}

const fonts: FontsOption[] = [
  {label: 'Sans Serif', font: 'Open Sans '},
  {label: 'Serif', font: 'PT Serif'},
  {label: 'Mono', font: 'Roboto Mono'},
]

const ModeFonts = () => {
  const [open, setOpen] = useState(false)
  const {fontStyle, handleFontStyleChange} = useContext(AppContext)
  const [currentFont, setCurrentFont] = useState(fontStyle)

  const toggleDropDown = () => {
    setOpen(state => !state)
  }

  const selectFont = (f: FontsOption): void => {
    setOpen(!open)
    setCurrentFont(() => f.label)
    handleFontStyleChange(f.font)
  }

  return (
    <div className="main-modeFonts">
      <ItemFont handlerOnClick={toggleDropDown} value={currentFont} />
      {open && <ContItemFonts fonts={fonts} handlerClick={selectFont} />}
    </div>
  )
}

export default ModeFonts
