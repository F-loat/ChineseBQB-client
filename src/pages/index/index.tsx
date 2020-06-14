import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { request, TypeItem, parseTypes } from '../../utils'
import { INDEX_API_URL } from '../../enums'
import BQBItem from '../../components/bqb-item'
import ErrTips from '../../components/err-tips'
import bannerImage from '../../assets/banner.png'
import './index.less'

interface State {
  types: TypeItem[],
  isLoad: boolean
}

interface Props { }

export default class IndexPage extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      types: [],
      isLoad: false
    }
  }

  types: TypeItem[]

  config: Config = {
    navigationBarTitleText: '开源表情包',
    enablePullDownRefresh: true
  }

  fetchTypes = async () => {
    const data = await request({
      url: INDEX_API_URL,
      dataType: '其他',
      responseType: 'text'
    })

    this.setState({
      types: parseTypes(data),
      isLoad: true
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

  async onPullDownRefresh() {
    await this.fetchTypes()
    Taro.stopPullDownRefresh()
  }

  onShareAppMessage() {
    return {
      title: '开源表情包',
      imageUrl: bannerImage,
      path: '/pages/index/index'
    }
  }

  render() {
    const { types = [], isLoad } = this.state

    if (!types.length) {
      return isLoad ? <ErrTips /> : <View />
    }

    return (
      <View className="index list">
        {types.map(type => (
          <BQBItem
            key={type.imgSrc}
            name={type.name}
            src={type.imgSrc}
            num={type.imgNum}
            showTitle
            onClick={() => this.handleNavigate(type.link)}
          />
        ))}
        {Taro.getEnv() === Taro.ENV_TYPE.WEAPP && (
          <Button className="flat-btn contact-btn" open-type="contact">+</Button>
        )}
      </View>
    )
  }
}
