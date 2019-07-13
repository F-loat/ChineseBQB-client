import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

interface State {
  readme: string
}

interface Props { }

export default class Index extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      readme: ''
    }
  }

  config: Config = {
    navigationBarTitleText: '关于',
    usingComponents: {
      wemark: '../../wemark/wemark'
    }
  }

  componentDidMount() {
    Taro
      .getStorage({ key: 'readme' })
      .then((res) => {
        this.setState({ readme: res.data })
      })
  }

  onShareAppMessage() {
    return {
      title: '关于中国表情包'
    }
  }

  render() {
    return (
      <View className="about">
        <wemark md={this.state.readme} link highlight type='wemark' />
      </View>
    )
  }
}
