import React, {useContext, useReducer, useState} from 'react'
import './containKeyboard.scss'
import {AppContext} from '../../context/AppContext'
import SearchPrompt from '../SearchPrompt/src/SearchPrompt'
import MainTitle from '../MainTitle'
import Menu from '../Menu'

import LineLongMobile from '../../assets/line-long-mobile.svg'
import LineLongTablet from '../../assets/line-long-tablet.svg'
import LineLongDesktop from '../../assets/line-long-desktop.svg'

import MainInformation from '../MainInformation'
import MainSource from '../MainSource'
import type {FormatWord, State, Action} from './types'
import {formatWord, getWordDefinition} from './utils'

const defaultClass = 'containKeyboard-img'

// Reducer
const reducer = (state: State, action: Action): State => {
  if (action.type === 'update_word') {
    return {
      ...state,
      word: action.newWord,
    }
  }
  return state
}

// Componente principal
const ContainKeyboard: React.FC = () => {
  const {theme} = useContext(AppContext)
  const [state, dispatch] = useReducer(reducer, {word: ''})
  const [word, setWord] = useState<FormatWord | null>(null)
  const [empty, setEmpty] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'update_word',
      newWord: e.target.value,
    })
  }

  const findWord = () => {
    if (state.word.trim() !== '') {
      getWordDefinition(state.word)
        .then(result => {
          if (result.status === 200) {
            setWord(formatWord(result[0]))
            setNotFound(false)
            setEmpty(false)
          } else if (result.status === 404) {
            setNotFound(true)
            setEmpty(false)
            setWord(null)
          }
        })
        .catch(error => {
          console.error(error)
        })
    } else {
      setEmpty(true)
      setNotFound(false)
      setWord(null)
    }
  }

  return (
    <div className={`containKeyboard containKeyboard--${theme}`}>
      <Menu />
      <SearchPrompt
        empty={empty}
        notFound={notFound}
        findWord={findWord}
        handleInputChange={handleInputChange}
      />
      {word?.word && (
        <>
          <MainTitle
            title={word.word}
            phonetic={word.phonetic}
            urlAudio={word.phonetic.audio}
          />
          <MainInformation meanings={word.meanings ?? []} />

          <div className={defaultClass}>
            <img
              className={`${defaultClass}__image--mobile`}
              src={LineLongMobile}
              alt="Imagen para mobile"
            />
            <img
              className={`${defaultClass}__image--tablet`}
              src={LineLongTablet}
              alt="Imagen para tablet"
            />
            <img
              className={`${defaultClass}__image--desktop`}
              src={LineLongDesktop}
              alt="Imagen para desktop"
            />
          </div>
          <MainSource source={word.source} />
        </>
      )}
    </div>
  )
}

export default ContainKeyboard
