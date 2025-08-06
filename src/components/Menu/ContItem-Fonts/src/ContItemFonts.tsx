import React, {PropsWithChildren, useContext} from 'react'
import '../index.scss'
import {AppContext} from '../../../../context/AppContext'

type FontOption = {
  label: string
  font: string
}

type Props = {
  fonts: FontOption[]
  handlerClick: (f: FontOption) => void
}
const ContItemFonts = ({fonts, handlerClick}: Props): JSX.Element => {
  const {theme, fontStyle} = useContext(AppContext)

  const defaultClass = 'contItemFonts'

  return (
    <div className={`${defaultClass} ${defaultClass}--${theme}`}>
      <div
        className={`${defaultClass}__container-listFont ${defaultClass}__container-listFont--${theme} `}
      >
        {fonts.map((f, index) => {
          const {font, label} = f
          return (
            <div key={index}>
              <p
                style={{fontFamily: fontStyle}}
                className={`${defaultClass}__container-listFont__p ${defaultClass}__container-listFont__p--${theme}`}
                key={index}
                onClick={() => {
                  handlerClick(f)
                }}
              >
                {label}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ContItemFonts
