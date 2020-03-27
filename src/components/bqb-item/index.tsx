import Taro, { Component } from '@tarojs/taro'
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

interface State {
  isLoad: boolean,
  isError: boolean
}

export default class BQBItem extends Component<Props, State> {
  static defaultProps = {
    showTitle: true,
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
    const { isLoad, isError } = this.state
    const { num, src, name, showTitle, onClick } = this.props
    const className = this.props['bqb-custom-class'] || ''

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
            onLoad={this.handleImageLoad}
            onError={this.handleIamgeError}
          />
          {isLoad ? null : <View className="bqb-image bqb-loading" />}
          {num && <Text className="bqb-num">{num}张</Text>}
        </View>
        {showTitle && <View className="bqb-name">{name}</View>}
      </View>
    )
  }
}
