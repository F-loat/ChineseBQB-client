import Taro, { Component, Config } from '@tarojs/taro'
import marked from 'marked'
import { View, RichText } from '@tarojs/components'
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
    navigationBarTitleText: '关于'
  }

  componentDidMount() {
    Taro
      .getStorage({ key: 'readme' })
      .then((res) => {
        const readme = marked(res.data).replace(/<img/g, '<img style="max-width: 100%"')
        this.setState({ readme })
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
        <RichText nodes={this.state.readme}></RichText>
      </View>
    )
  }
}
