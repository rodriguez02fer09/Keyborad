import {useContext} from 'react'
import '../index.scss'
import {AppContext} from '../../../../context/AppContext'
import type {ItemFontProps} from '../../../../types/index'

const ContItemFonts = ({fonts, handlerClick}: ItemFontProps) => {
  const {theme, fontStyle} = useContext(AppContext)
  const baseClass = 'contItemFonts'

  return (
    <div className={`${baseClass} ${baseClass}--${theme}`}>
      <div
        className={`${baseClass}__container-listFont ${baseClass}__container-listFont--${theme}`}
      >
        {fonts.map(fontOption => (
          <div key={fontOption.label}>
            <p
              style={{fontFamily: fontStyle}}
              className={`${baseClass}__container-listFont__p ${baseClass}__container-listFont__p--${theme}`}
              onClick={() => handlerClick(fontOption)}
            >
              {fontOption.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContItemFonts
