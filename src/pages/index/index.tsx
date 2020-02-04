import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { request, TypeItem, parseTypes, getSetting, Setting } from '../../utils'
import { RESPONSE_TYPE, DATA_TYPE, INDEX_API_URL } from '../../enums'
import BQBItem from '../../components/bqb-item'
import ErrTips from '../../components/err-tips'
import aboutImage from '../../assets/about.jpg'
import settingImage from '../../assets/setting.jpg'
import bannerImage from '../../assets/banner.png'
import './index.less'

interface State {
  types: TypeItem[],
  setting: Setting,
  isLoad: boolean
}

interface Props { }

export default class IndexPage extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      types: [],
      setting: getSetting(),
      isLoad: false
    }
  }

  types: TypeItem[]

  config: Config = {
    navigationBarTitleText: '开源表情包',
    enablePullDownRefresh: true
  }

  fetchTypes = async () => {
    const { repository } = this.state.setting

    const data = await request({
      url: INDEX_API_URL[repository],
      dataType: DATA_TYPE[repository],
      responseType: RESPONSE_TYPE[repository]
    })

    this.setState({
      types: parseTypes(data, repository),
      isLoad: true
    })
  }

  updateSetting = () => {
    const { setting } = this.state
    const { repository } = this.$router.params

    const newSetting = getSetting()

    if (repository) {
      Taro.setStorageSync('setting', { ...newSetting, repository })
      Taro.reLaunch({ url: '/pages/index/index' })
    }

    this.setState({ setting: newSetting }, () => {
      if (setting.repository !== newSetting.repository) {
        Taro.reLaunch({ url: '/pages/index/index' })
      }
    })
  }

  handleNavigate = (url?: string) => {
    if (url) {
      Taro.navigateTo({ url })
    }
  }

  componentDidMount() {
    this.fetchTypes()
  }

  componentDidShow() {
    this.updateSetting()
  }

  async onPullDownRefresh() {
    await this.fetchTypes()
    Taro.stopPullDownRefresh()
  }

  onShareAppMessage() {
    const { repository } = this.state.setting

    return {
      title: '开源表情包',
      imageUrl: bannerImage,
      path: `/pages/index/index?repository=${repository}`
    }
  }

  render() {
    const { types = [], isLoad, setting } = this.state
    const { perLineBQB, showBQBTitle } = setting
    const bqbClassName = `bqb-item-${perLineBQB}`

    if (!types.length) {
      return isLoad ? <ErrTips /> : <View />
    }

    return (
      <View className="list">
        {types.map(type => (
          <BQBItem
            key={type.imgSrc}
            name={type.name}
            src={type.imgSrc}
            num={type.imgNum}
            showTitle={showBQBTitle}
            bqb-custom-class={bqbClassName}
            onClick={() => this.handleNavigate(type.link)}
          />
        ))}
        {isLoad && (
          <BQBItem
            src={settingImage}
            name="设置"
            showTitle={showBQBTitle}
            bqb-custom-class={bqbClassName}
            onClick={() => this.handleNavigate('/pages/setting/index')}
          />
        )}
        {isLoad && (
          <BQBItem
            src={aboutImage}
            name="关于"
            showTitle={showBQBTitle}
            bqb-custom-class={bqbClassName}
            onClick={() => this.handleNavigate('/pages/about/index')}
          />
        )}
        <Button className="flat-btn contact-btn" open-type="contact">+</Button>
      </View>
    )
  }
}
