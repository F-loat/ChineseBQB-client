import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { ImageItem, parseImages, smartLoading } from '../../utils'
import BQBItem from '../../components/bqb-item'
import ErrTips from '../../components/err-tips'
import './index.less'

interface State {
  images: ImageItem[],
  urls: string[],
  isLoad: boolean
}

interface Props { }

export default class List extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      urls: [],
      isLoad: false
    }
  }

  images: ImageItem[]
  urls: string[]

  config: Config = {
    navigationBarTitleText: '中国表情包',
    enablePullDownRefresh: true
  }

  fetchImages = async () => {
    const { name } = this.$router.params
    const cachedData = Taro.getStorageSync(name)

    if (cachedData) {
      this.images = parseImages(cachedData)
      this.urls = this.images.map(img => img.src)
      this.showMoreImages(true)
    }

    const hideLoading = smartLoading('加载中', !!cachedData)

    const { data } = await Taro.request({
      url: `https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/source/_posts/${name}.md`,
      dataType: 'text',
      responseType: 'text'
    })

    Taro.setStorage({ key: name, data })

    this.images = parseImages(data)
    this.urls = this.images.map(img => img.src)
    this.showMoreImages(true)

    hideLoading()
  }

  showMoreImages = (reload?: boolean) => {
    const { images, urls } = this.state

    const newImages = this.images.splice(0, 20)
    const newUrls = this.urls.splice(0, 20)

    if (reload) {
      this.setState({
        images: newImages,
        urls: newUrls,
        isLoad: !this.images.length
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
    const { images = [], isLoad } = this.state

    if (!images.length) {
      return  isLoad ? <ErrTips /> : <View />
    }

    return (
      <View className='list'>
        {images.map(img => (
          <BQBItem
            key={img.src}
            src={img.src}
            name={img.name}
            onClick={() => this.handlePreview(img.src)}
          />
        ))}
        <Button
          className="flat-btn random-btn"
          onClick={() => this.randomImages()}
        >≈</Button>
      </View>
    )
  }
}
