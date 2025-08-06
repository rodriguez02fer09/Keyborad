import React, {useContext} from 'react'
import {AppContext} from '../../../../context/AppContext'
import {Howl} from 'howler'
import '../index.scss'
import BottonNormal from '../../../../assets/play-button-normal.svg'
import BottonHover from '../../../../assets/play-button-hover.svg'

type Props = {
  urlAudio: string
}

const Button = ({urlAudio}: Props): JSX.Element => {
  const {isDark} = useContext(AppContext)

  const handlePlaying = (): void => {
    const sound = new Howl({
      src: [urlAudio],
      html5: true,
      onend: () => {
        console.log('Reproducción finalizada')
      },
    })

    sound.play()
  }

  return (
    <div className="Button">
      <img
        onClick={handlePlaying}
        src={isDark() ? BottonHover : BottonNormal}
        alt="Play Button"
      />
    </div>
  )
}

export default Button
