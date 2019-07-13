import Taro, { Component } from '@tarojs/taro'
import { Image } from '@tarojs/components'
import './index.less'

interface Props {
  src: string,
  onClick?: any
}

export default class Index extends Component<Props> {
  static defaultProps = {
    onClick: () => {}
  }

  render() {
    const { src, onClick } = this.props

    return (
      <Image
        className="bqb-image"
        mode="aspectFill"
        lazyLoad
        src={src}
        onClick={onClick}
      />
    )
  }
}
