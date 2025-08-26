import React, {useContext} from 'react'
import Section from '../Section'
import TitleMeaning from '../TitleMeaning'
import DescriptionMeaning from '../DescriptionMeaning'
import {AppContext} from '../../../context/AppContext'
import Synonyms from '../Synonyms'
import '../index.scss'
import type {PropsMainInformation} from '../../../types/index'
// Interfaces directamente en el archivo

// Componente
const MainInformation = ({meanings = []}: PropsMainInformation) => {
  const defaultClass = 'main-containMeaning'
  const {fontStyle, isDark} = useContext(AppContext)
  const customClass = isDark() ? `${defaultClass}--dark` : ''

  return (
    <div
      className={`${defaultClass} ${customClass}`}
      style={{fontFamily: fontStyle}}
    >
      {meanings.map(({partOfSpeech, definitions, synonyms}, idx) => (
        <React.Fragment key={idx}>
          <Section text={partOfSpeech} />
          <TitleMeaning />
          <DescriptionMeaning definitions={definitions} />
          <Synonyms values={synonyms} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default MainInformation
