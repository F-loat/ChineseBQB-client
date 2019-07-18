import Taro, { Component } from '@tarojs/taro'
import { Image, View, Text } from '@tarojs/components'
import './index.less'

interface Props {
  num?: number,
  src?: string,
  name?: string,
  onClick?: any
}

export default class Index extends Component<Props> {
  static defaultProps = {
    onClick: () => {}
  }

  static externalClasses = ['custom-class']

  render() {
    const { num, src, name, onClick } = this.props

    return (
      <View className="bqb-item custom-class" onClick={onClick}>
        {num && <Text className="bqb-num">{num}张</Text>}
        {src ? (
          <Image
            className="bqb-image"
            mode="aspectFill"
            lazyLoad
            src={src}
          />
        ) : (
          <View className="bqb-image" />
        )}
        <Text className="bqb-name">{name}</Text>
      </View>
    )
  }
}
