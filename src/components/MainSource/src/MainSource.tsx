import React, {useContext} from 'react'
import '../index.scss'
import {AppContext} from '../../../context/AppContext'

interface PropMainSource {
  source: string[]
}

const MainSource = ({source}: PropMainSource): JSX.Element => {
  const {theme, fontStyle} = useContext(AppContext)
  const defaultClass = 'main-source'

  return (
    <div className={`${defaultClass} ${defaultClass}--${theme}`}>
      <div
        className={`${defaultClass}__source ${defaultClass}__source--${theme}`}
      >
        <p style={{fontFamily: fontStyle}}>Source</p>
      </div>
      <div className={`${defaultClass}__link ${defaultClass}__link--${theme}`}>
        <a style={{fontFamily: fontStyle}} href="">
          {source}
        </a>
      </div>
    </div>
  )
}
export default MainSource
