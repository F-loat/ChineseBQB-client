import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { TypeItem, parseTypes, smartLoading, getSetting } from '../../utils'
import BQBItem from '../../components/bqb-item'
import ErrTips from '../../components/err-tips'
import aboutImage from '../../assets/about.jpg'
import settingImage from '../../assets/setting.jpg'
import './index.less'

interface State {
  types: TypeItem[],
  perLineBQB: number,
  showBQBTitle: boolean,
  isLoad: boolean
}

interface Props { }

export default class Index extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      types: [],
      perLineBQB: 4,
      showBQBTitle: true,
      isLoad: false
    }
  }

  types: TypeItem[]

  config: Config = {
    navigationBarTitleText: '开源表情包',
    enablePullDownRefresh: true
  }

  fetchTypes = async () => {
    const cachedData = Taro.getStorageSync('readme')

    if (cachedData) {
      this.setState({
        types: parseTypes(cachedData),
        isLoad: true
      })
    }

    const hideLoading = smartLoading('加载中', !!cachedData)

    const { data } = await Taro.request({
      url: 'https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/README.md',
      dataType: '其他',
      responseType: 'text'
    })

    Taro.setStorage({ key: 'readme', data })

    this.setState({
      types: parseTypes(data),
      isLoad: true
    })

    hideLoading()
  }

  updateSetting = () => {
    const setting = getSetting()
    this.setState(setting)
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
    return {
      title: '开源表情包'
    }
  }

  render() {
    const { types = [], isLoad, perLineBQB, showBQBTitle } = this.state
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
