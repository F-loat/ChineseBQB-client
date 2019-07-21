import Taro, { Component } from '@tarojs/taro'
import { Image, View, Text } from '@tarojs/components'
import errorImage from '../../assets/error.jpg'
import './index.less'

interface Props {
  num?: number,
  src: string,
  name?: string,
  onClick?: any
}

interface State {
  isLoad: boolean,
  isError: boolean
}

export default class BQBItem extends Component<Props, State> {
  static defaultProps = {
    onClick: () => {}
  }

  static externalClasses = ['bqb-custom-class']

  handleImageLoad = () => {
    this.setState({
      isLoad: true
    })
  }

  handleIamgeError = () => {
    this.setState({
      isError: true
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.setState({
        isLoad: false,
        isError: false
      })
    }
  }

  render() {
    const { num, src, name, onClick } = this.props
    const { isLoad, isError } = this.state

    return (
      <View className="bqb-item bqb-custom-class" onClick={onClick}>
        <Image
          className={`bqb-image ${isLoad ? '' : 'hide'}`}
          mode="aspectFill"
          lazyLoad
          src={isError ? errorImage : src}
          onLoad={() => this.handleImageLoad()}
          onError={() => this.handleIamgeError()}
        />
        {isLoad ? null : (<View className="bqb-image bqb-loading" />)}
        {num && <Text className="bqb-num">{num}张</Text>}
        <Text className="bqb-name">{name}</Text>
      </View>
    )
  }
}
