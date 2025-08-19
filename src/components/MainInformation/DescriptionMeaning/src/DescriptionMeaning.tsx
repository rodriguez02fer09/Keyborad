import React, {useContext} from 'react'
import '../index.scss'
import {AppContext} from '../../../../context/AppContext'

// Reutiliza el tipo Definition desde un archivo centralizado si es posible
interface Definition {
  definition: string
  example: string
}

interface PropsDefinitions {
  definitions: Definition[]
}

const DescriptionMeaning = ({definitions}: PropsDefinitions) => {
  const {theme, fontStyle, isDark} = useContext(AppContext)
  const baseClass = 'main-descriptionMeaning'
  const darkClass = isDark() ? `${baseClass}--dark` : ''

  return (
    <div className={`${baseClass} ${darkClass}`}>
      <ul className={`${baseClass}__list ${baseClass}__list--${theme}`}>
        {definitions.map(({definition, example}, idx) => (
          <React.Fragment key={idx}>
            <li
              className={`${baseClass}__list__definition ${baseClass}__list__definition--${theme}`}
              style={{fontFamily: fontStyle}}
            >
              {definition}
            </li>
            {example && <p>{example}</p>}
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default DescriptionMeaning
