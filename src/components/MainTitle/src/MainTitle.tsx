import '../index.scss'
import Button from '../Button'
import Title from '../Title'
import type {MainTitleProps} from '../../../types/index'

const MainTitle = ({
  title,
  phonetic,
  urlAudio,
}: //handlePlaying,
//onFinishedPlaying,
MainTitleProps) => {
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
