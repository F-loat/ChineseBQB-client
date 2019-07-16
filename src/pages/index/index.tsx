import Taro, { Component, Config } from '@tarojs/taro'
import { View, Navigator, Button, Text } from '@tarojs/components'
import { TypeItem, parseTypes } from '../../utils'
import BQBImage from '../../components/bqb-image'
import './index.less'

interface State {
  types: TypeItem[]
}

interface Props { }

export default class Index extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      types: []
    }
  }

  config: Config = {
    navigationBarTitleText: '中国表情包',
    enablePullDownRefresh: true
  }

  fetchTypes = async () => {
    Taro.showLoading({ title: '加载中' })

    const { data } = await Taro.request({
      url: 'https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/README.md',
      dataType: 'text'
    })

    Taro.setStorage({ key: 'readme', data })

    const types = parseTypes(data)

    this.setState({ types })

    Taro.hideLoading()
  }

  componentDidMount () {
    this.fetchTypes()
  }

  async onPullDownRefresh () {
    await this.fetchTypes()
    Taro.stopPullDownRefresh()
  }

  onShareAppMessage () {
    return {
      title: '中国表情包'
    }
  }

  render () {
    const { types = [] } = this.state

    if (!types.length) {
      return <View />
    }

    return (
      <View className='list'>
        {types.map(type => (<Navigator className="item type-item" key={type.imgSrc} url={type.link}>
          <Text className="type-num">{type.num}张</Text>
          <BQBImage src={type.imgSrc} />
          <Text className="item-name">{type.name || '未命名'}</Text>
        </Navigator>))}
        <Navigator className="item" url="/pages/about/index">
          <Text className="about-icon">关于</Text>
          <Text className="item-name">关于</Text>
        </Navigator>
        <Button className="flat-btn contact-btn" open-type="contact">+</Button>
      </View>
    )
  }
}
