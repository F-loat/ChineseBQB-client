import Taro, { Component, Config } from '@tarojs/taro'
import marked from 'marked'
import { View, Button, RichText } from '@tarojs/components'
import { request, getSetting, Setting } from '../../utils'
import { ABOUT_API_URL } from '../../enums'
import './index.less'

interface State {
  readme: string,
  setting: Setting
}

interface Props { }

export default class AboutPage extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      readme: '',
      setting: getSetting()
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

  async fetchAbout() {
    const { repository } = this.state.setting

    const data = await request({
      url: ABOUT_API_URL[repository],
      dataType: '其他',
      responseType: 'text'
    })

    const readme = marked(data)
      .replace(/raw\.githubusercontent\.com/g, 'proxy.youngon.com.cn/github/raw')
      .replace(/<img/g, '<img style="max-width: 100%"')

    this.setState({ readme })
  }

  updateSetting = () => {
    const setting = getSetting()
    this.setState({ setting }, () => {
      this.fetchAbout()
    })
  }

  componentDidMount() {
    this.fetchAbout()
  }

  componentDidShow() {
    this.updateSetting()
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
