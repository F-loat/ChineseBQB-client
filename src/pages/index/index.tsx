import Taro, { Component, Config } from '@tarojs/taro'
import { View, Navigator, Button, Text } from '@tarojs/components'
import { TypeItem, parseTypes, smartLoading } from '../../utils'
import BQBImage from '../../components/bqb-image'
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
          <Navigator className="item type-item" key={type.imgSrc} url={type.link}>
            <Text className="type-num">{type.num}张</Text>
            <BQBImage src={type.imgSrc} />
            <Text className="item-name">{type.name || '未命名'}</Text>
          </Navigator>
        ))}
        {loaded && (
          <Navigator className="item" url="/pages/about/index">
            <Text className="about-icon">关于</Text>
            <Text className="item-name">关于</Text>
          </Navigator>
        )}
        <Button className="flat-btn contact-btn" open-type="contact">+</Button>
      </View>
    )
  }
}
