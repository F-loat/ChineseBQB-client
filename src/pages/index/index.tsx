import Taro, { Component, Config } from '@tarojs/taro'
import { View, Navigator, Image, Text } from '@tarojs/components'
import './index.less'

interface TypeItem {
  name: string,
  link: string,
  imgSrc: string,
}

interface State {
  types: Array<TypeItem>
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

    const imgTags = data && data.match(/<img height='100px' src='(.*)'/g)

    if (!imgTags) {
      return {}
    }

    const types = imgTags
      .map(item => {
        const matchInfos = item.match(/.*master\/(.*)\/(.*)'/)

        if (!matchInfos) {
          return {}
        }

        const typeFullName = matchInfos[1]
        const typeName = typeFullName.replace(/^(\w)*/, '').replace(/BQB$/, '')
        const imgName = matchInfos[2]

        return {
          name: typeName,
          link: `/pages/list/index?name=${typeFullName}&title=${typeName}`,
          imgSrc: `https://raw.githubusercontent.com/zhaoolee/ChineseBQB/master/${typeFullName}/${imgName}`
        }
      })

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
        {types.map(type => (<Navigator className="item" key={type.name} url={type.link}>
          <Image
            className="item-image"
            mode="aspectFill"
            lazyLoad
            src={type.imgSrc}
          />
          <Text className="item-name">{type.name}</Text>
        </Navigator>))}
        <Navigator className="item" url="/pages/about/index">
          <Text className="about-icon">关于</Text>
          <Text className="item-name">关于</Text>
        </Navigator>
      </View>
    )
  }
}
