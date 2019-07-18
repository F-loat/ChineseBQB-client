import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { TypeItem, parseTypes, smartLoading } from '../../utils'
import BQBItem from '../../components/bqb-item'
import aboutImage from '../../assets/about.png'
import './index.less'

interface State {
  types: TypeItem[],
  loaded: boolean
}

interface Props { }

export default class Index extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      types: [],
      loaded: false
    }
  }

  types: TypeItem[]

  config: Config = {
    navigationBarTitleText: '中国表情包',
    enablePullDownRefresh: true
  }

  fetchTypes = async () => {
    const cachedData = Taro.getStorageSync('readme')

    if (cachedData) {
      this.types = parseTypes(cachedData)
      this.showMoreTypes(true)
    }

    const hideLoading = smartLoading('加载中', !!cachedData)

    const { data } = await Taro.request({
      url: 'https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/README.md',
      dataType: 'text',
      responseType: 'text'
    })

    Taro.setStorage({ key: 'readme', data })

    this.types = parseTypes(data)
    this.showMoreTypes(true)

    hideLoading()
  }

  showMoreTypes = (reload?: boolean) => {
    const { types } = this.state

    const newTypes = this.types.splice(0, 20)

    if (reload) {
      this.setState({
        types: newTypes,
        loaded: false
      })
    } else {
      this.setState({
        types: types.concat(newTypes)
      })
    }
  }

  handleNavigate = (url?: string) => {
    if (url) {
      Taro.navigateTo({ url })
    }
  }

  componentDidMount() {
    this.fetchTypes()
  }

  async onPullDownRefresh() {
    await this.fetchTypes()
    Taro.stopPullDownRefresh()
  }

  onReachBottom() {
    if (this.types.length) {
      this.showMoreTypes()
    } else {
      this.setState({ loaded: true })
    }
  }

  onShareAppMessage() {
    return {
      title: '中国表情包'
    }
  }

  render() {
    const { types = [], loaded } = this.state

    if (!types.length) {
      return <View />
    }

    return (
      <View className='list'>
        {types.map(type => (
          <BQBItem
            custom-class="type-item"
            key={type.imgSrc}
            name={type.name}
            src={type.imgSrc}
            num={type.imgNum}
            onClick={() => this.handleNavigate(type.link)}
          />
        ))}
        {loaded && (
          <BQBItem
            src={aboutImage}
            name="关于"
            onClick={() => this.handleNavigate('/pages/about/index')}
          />
        )}
        <Button className="flat-btn contact-btn" open-type="contact">+</Button>
      </View>
    )
  }
}
