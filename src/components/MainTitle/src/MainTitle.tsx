import React from 'react'
import '../index.scss'
import Button from '../Button'
import Title from '../Title'

type Phonetic = {
  text: string
  audio: string
}

type Props = {
  title: string
  phonetic: Phonetic
  urlAudio: string
  // handlePlaying: (e: React.MouseEvent<HTMLButtonElement>) => void
  //onFinishedPlaying: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const MainTitle = ({
  title,
  phonetic,
  urlAudio,
}: //handlePlaying,
//onFinishedPlaying,
Props) => {
  return (
    <div className="ContainTitleButton">
      <Title
        title={title}
        phonetic={phonetic}
        // handlePlaying={handlePlaying}
        //onFinishedPlaying={onFinishedPlaying}
      />
      <Button urlAudio={urlAudio} />
    </div>
  )
}

export default MainTitle
