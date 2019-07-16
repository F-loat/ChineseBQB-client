import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import BQBImage from '../../components/bqb-image'
import './index.less'

interface ImageItem {
  src: string,
  name?: string,
}

interface State {
  images: ImageItem[],
  urls: string[]
}

interface Props { }

export default class Index extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      urls: []
    }
  }

  images: ImageItem[]
  urls: string[]

  config: Config = {
    navigationBarTitleText: '中国表情包',
    enablePullDownRefresh: true
  }

  fetchImages = async () => {
    Taro.showLoading({ title: '加载中' })

    const { name } = this.$router.params

    const { data } = await Taro.request({
      url: `https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/${name}/index.md`,
      mode: 'cors'
    })

    const tagMatchReg = /\!\[.*\]/g
    const imgTags = data && data.match(tagMatchReg)

    const infoMatchReg = /\!\[(.*master\/.*\/(.*))\]/

    this.images = imgTags.map(item => {
      const matchInfos: string[] = item.match(infoMatchReg)

      if (!matchInfos) {
        return null
      }

      return {
        src: matchInfos[1],
        name: matchInfos[2].replace(/\..*$/, '')
      }
    })
    .filter(item => !!item)

    this.urls = this.images.map(img => img.src)

    this.showMoreImages(true)

    Taro.hideLoading()
  }

  showMoreImages = (reload?: boolean) => {
    const { images, urls } = this.state

    const newImages = this.images.splice(0, 20)
    const newUrls = this.urls.splice(0, 20)

    if (reload) {
      this.setState({
        images: newImages,
        urls: newUrls
      })
    } else {
      this.setState({
        images: images.concat(newImages),
        urls: urls.concat(newUrls)
      })
    }
  }

  handlePreview = (src) => {
    Taro.previewImage({
      urls: this.state.urls,
      current: src
    })
  }

  randomImages = () => {
    const allImages = this.images.concat(this.state.images)

    this.images = allImages.sort(() => (Math.random() > 0.5 ? -1 : 1))
    this.urls = this.images.map(img => img.src)

    this.showMoreImages(true)

    Taro.pageScrollTo({ scrollTop: 0 })
    Taro.showToast({ title: '表情包已随机排序', icon: 'none' })
  }

  componentDidMount() {
    const { title } = this.$router.params

    if (title) {
      Taro.setNavigationBarTitle({
        title: decodeURIComponent(title)
      })
    }

    this.fetchImages()
  }

  async onPullDownRefresh() {
    await this.fetchImages()
    Taro.stopPullDownRefresh()
  }

  onReachBottom() {
    if (this.images.length) {
      this.showMoreImages()
    }
  }

  onShareAppMessage() {
    return {
      title: this.$router.params.title
    }
  }

  render() {
    const { images = [] } = this.state

    return (
      <View className='list'>
        {images.map(img => (<View className="item" key={img.src}>
          <BQBImage
            src={img.src}
            onClick={() => this.handlePreview(img.src)}
          />
          <Text className="item-name">{img.name}</Text>
        </View>))}
        <Button
          className="flat-btn random-btn"
          onClick={() => this.randomImages()}
        >≈</Button>
      </View>
    )
  }
}
