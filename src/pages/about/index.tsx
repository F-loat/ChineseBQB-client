import Taro, { Component, Config } from '@tarojs/taro'
import marked from 'marked'
import { View, Button, RichText } from '@tarojs/components'
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

  rewardDeveloper = () => {
    const urls = [
      'https://github.com/F-loat/ChineseBQB-client/raw/master/images/tuyan.jpg',
      'https://github.com/F-loat/ChineseBQB-client/raw/master/images/zhaozhao.jpg'
    ]

    const randomIndex = Math.random() > 0.5 ? 0 : 1

    Taro.previewImage({
      urls,
      current: urls[randomIndex]
    })
  }

  componentDidMount() {
    Taro
      .getStorage({ key: 'readme' })
      .then((res) => {
        const readme = marked(res.data).replace(/<img/g, '<img style="max-width: 100%"')
        this.setState({ readme })
      })
  }

  render() {
    return (
      <View className="about">
        <RichText nodes={this.state.readme}></RichText>
        <Button
          className="flat-btn reward-btn"
          onClick={() => this.rewardDeveloper()}
        >赏</Button>
      </View>
    )
  }
}
