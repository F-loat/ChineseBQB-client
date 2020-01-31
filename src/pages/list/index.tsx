import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { ImageItem, parseImages, smartLoading, getSetting } from '../../utils'
import BQBItem from '../../components/bqb-item'
import ErrTips from '../../components/err-tips'
import './index.less'

interface State {
  images: ImageItem[],
  urls: string[],
  setting: {
    perLineBQB: number,
    showBQBTitle: boolean,
  },
  isLoad: boolean
}

interface Props { }

export default class List extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      urls: [],
      setting: getSetting(),
      isLoad: false
    }
  }

  images: ImageItem[]
  urls: string[]

  config: Config = {
    navigationBarTitleText: '开源表情包',
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
      dataType: '其他',
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

    const newImages = this.images.splice(0, 30)
    const newUrls = this.urls.splice(0, 30)

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

  downloadImages = async (index: number = 0) => {
    try {
      const images = this.state.images.concat(this.images)
      const { src } = images[index]
      const nextIndex = index + 1

      Taro.showLoading({ title: `保存第${nextIndex}张中...` })
      const res: any = await Taro.downloadFile({ url: src })
      await Taro.saveImageToPhotosAlbum({ filePath: res.tempFilePath })

      if (nextIndex < images.length) {
        this.downloadImages(nextIndex)
      } else {
        Taro.showToast({ title: `保存完毕！`, duration: 5000 })
      }
    } catch (err) {
      Taro.showToast({ title: '请授予保存图片权限', icon: 'none' })
    }
  }

  handleDownload = () => {
    Taro.showModal({
      title: '批量下载',
      content: '是否批量下载本类型全部表情包',
      success: ({ confirm }) => confirm && this.downloadImages(0)
    })
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

  updateSetting = () => {
    this.setState({ setting: getSetting() })
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

  componentDidShow() {
    this.updateSetting()
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
    const { images = [], isLoad, setting } = this.state
    const { perLineBQB, showBQBTitle } = setting
    const bqbClassName = `bqb-item-${perLineBQB}`

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
            showTitle={showBQBTitle}
            bqb-custom-class={bqbClassName}
            onClick={() => this.handlePreview(img.src)}
          />
        ))}
        <Button
          className="flat-btn random-btn"
          onClick={() => this.handleDownload()}
          onLongPress={() => this.randomImages()}
        >
          <View className='at-icon at-icon-download' />
        </Button>
      </View>
    )
  }
}
