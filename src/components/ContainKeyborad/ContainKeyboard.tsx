import React, {useContext, useEffect, useReducer, useState} from 'react'
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

const defaultClass = 'containKeyboard-img'

type Phonetic = {
  text: string
  audio: string
}

type Meaning = any
const buildPhonetics = (phonetics: Phonetic[]): Phonetic => {
  return {
    text: phonetics.find(phonetic => phonetic.text !== '')?.text || '',
    audio: phonetics.find(phonetic => phonetic.audio !== '')?.audio || '',
  }
}
type FormatWord = {
  word: string
  phonetics: Phonetic
  meanings: Meaning
  source: string[]
}
const formatWord = (meaningWord: any): FormatWord => {
  if (meaningWord?.word) {
    const {word = '', phonetics, meanings, sourceUrls} = meaningWord
    return {
      word,
      phonetic: buildPhonetics(phonetics),
      meanings: meanings,
      source: sourceUrls,
    }
  }
  return {}
}

const getWordDefinition = async (word: string) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    )
    const data = await response.json()
    return {
      ...data,
      status: response.status,
    }
  } catch (err) {
    console.error(err)
  }
}

type State = {
  word: string
}
type Action = {
  type: 'update_word'
  newWord: string
}
const reducer = (state: State, action: Action): State => {
  if (action.type === 'update_word') {
    return {
      ...state,
      word: action.newWord,
    }
  }
  return state
}

const ContainKeyboard = () => {
  const {theme} = useContext(AppContext)
  const [state, dispactch] = useReducer(reducer, {word: ''})
  const [word, setWord] = useState<FormatWord | null>(null)
  const [empty, setEmpty] = useState(false)
  const [notFound, setNotFound] = useState(false)

  type Props = {
    empty: boolean
    notFound: boolean
    findWord: () => void
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispactch({
      type: 'update_word',
      newWord: e.target.value,
    })
  }

  const findWord = () => {
    if (state.word !== '') {
      getWordDefinition(state.word)
        .then(result => {
          if (result.status === 200) {
            setWord(() => formatWord(result[0]))
            setNotFound(false)
            setEmpty(false)
          }
          if (result.status === 404) {
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
      {word && word.word && (
        <>
          <MainTitle
            title={word && word.word}
            phonetic={word?.phonetic}
            urlAudio={word.phonetic.audio}
          />
          <MainInformation meanings={word && word.meanings} />
          <div className={`${defaultClass}`}>
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
          <MainSource source={word && word.source} />
        </>
      )}
    </div>
  )
}

export default ContainKeyboard

// const obj = {
//   nombre: "ggg"
// }
// const {nombre}= obj
// const atributo = "nombre"
// const val = obj[`${nombre}`];

//que es un mapeo pasar de un formato a otro formatoa otro objeto

// if (meaningWord?.word) el signo pregunta valida si un objeto exuste

// meaningWord && meaningWord.word esto es igual meaningWord?.word
