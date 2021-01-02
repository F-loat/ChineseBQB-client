import Taro, { useState } from '@tarojs/taro'
import { Image, View, Text } from '@tarojs/components'
import errorImage from '../../assets/error.jpg'
import './index.less'

interface Props {
  num?: number,
  src?: string,
  name?: string,
  showTitle?: boolean,
  onClick?: any
}

export default function BQBItem (props: Props) {
  const {
    num,
    src,
    name,
    showTitle = true,
    onClick = () => {}
  } = props

  const [isLoad, setIsLoad] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleImageLoad = () => {
    setIsLoad(true)
  }

  const handleIamgeError = () => {
    setIsError(true)
  }

  const className = props['bqb-custom-class'] || ''

  if (!src) {
    return (
      <View className={`bqb-item bqb-custom-class ${className}`} onClick={onClick}>
        <View className="bqb-text">{name}</View>
      </View>
    )
  }

  return (
    <View className={`bqb-item bqb-custom-class ${className}`} onClick={onClick}>
      <View className="bqb-image-wrap">
        <Image
          className={`bqb-image ${isLoad ? '' : 'hide'}`}
          mode="aspectFill"
          lazyLoad
          src={isError ? errorImage : src}
          onLoad={handleImageLoad}
          onError={handleIamgeError}
        />
        {isLoad ? null : <View className="bqb-image bqb-loading" />}
        {num && <Text className="bqb-num">{num}张</Text>}
      </View>
      {showTitle && <View className="bqb-name">{name}</View>}
    </View>
  )
}

BQBItem.options = {
  externalClasses: ['bqb-custom-class']
}
