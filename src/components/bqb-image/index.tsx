import Taro, { Component } from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import './index.less'

interface Props {
  src?: string,
  onClick?: any
}

export default class Index extends Component<Props> {
  static defaultProps = {
    onClick: () => {}
  }

  render() {
    const { src, onClick } = this.props

    return src ? <Image
      className="bqb-image"
      mode="aspectFill"
      lazyLoad
      src={src}
      onClick={onClick}
    /> : <View
      className="bqb-image"
      onClick={onClick}
    />
  }
}
