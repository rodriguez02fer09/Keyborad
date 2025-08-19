import React, {useContext} from 'react'
import '../index.scss'
import {AppContext} from '../../../../context/AppContext'

interface PropsSynonyms {
  values: string[]
}

const Synonyms = ({values}: PropsSynonyms) => {
  const {fontStyle, isDark} = useContext(AppContext)
  const defaultClass = `main-synonyms`
  const darkClass = isDark() ? `${defaultClass}--dark` : ''

  return (
    <div className={`${defaultClass} ${darkClass}`}>
      <div className={`${defaultClass}__title ${darkClass}__title`}>
        <p style={{fontFamily: fontStyle}}>Synonyms</p>
      </div>
      <div className={`${defaultClass}__description ${darkClass}__description`}>
        {values.map((value, index) => (
          <p key={index} style={{fontFamily: fontStyle}}>
            {value}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Synonyms
