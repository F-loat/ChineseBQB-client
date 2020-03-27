import Taro, { Component, Config } from '@tarojs/taro'
import marked from 'marked'
import { View, Button, RichText } from '@tarojs/components'
import { request } from '../../utils'
import { ABOUT_API_URL } from '../../enums'
import bannerImage from '../../assets/banner.png'
import './index.less'

interface State {
  readme: string
}

interface Props { }

export default class AboutPage extends Component<Props, State> {
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
      'https://proxy.youngon.com.cn/github/raw/F-loat/ChineseBQB-client/master/images/tuyan.jpg',
      'https://proxy.youngon.com.cn/github/raw/F-loat/ChineseBQB-client/master/images/zhaozhao.jpg'
    ]

    const randomIndex = Math.random() > 0.5 ? 0 : 1

    Taro.previewImage({
      urls,
      current: urls[randomIndex]
    })
  }

  async fetchAbout() {
    const data = await request({
      url: ABOUT_API_URL,
      dataType: '其他',
      responseType: 'text'
    })

    const readme = marked(data)
      .replace(/raw\.githubusercontent\.com/g, 'proxy.youngon.com.cn/github/raw')
      .replace(/<img/g, '<img style="max-width: 100%"')

    this.setState({ readme })
  }

  componentDidMount() {
    this.fetchAbout()
  }

  onShareAppMessage() {
    return {
      title: '开源表情包 - 关于',
      imageUrl: bannerImage
    }
  }

  render() {
    return (
      <View className="about">
        <RichText nodes={this.state.readme} space="nbsp" />
        <Button
          className="flat-btn reward-btn"
          onClick={() => this.rewardDeveloper()}
        >赏</Button>
      </View>
    )
  }
}
