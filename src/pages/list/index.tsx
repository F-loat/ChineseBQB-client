import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Ad } from '@tarojs/components'
import { request, ImageItem, parseImages, getSetting, Setting } from '../../utils'
import { RESPONSE_TYPE, DATA_TYPE, LIST_API_URL } from '../../enums'
import BQBItem from '../../components/bqb-item'
import ErrTips from '../../components/err-tips'
import bannerImage from '../../assets/banner.png'
import './index.less'

interface State {
  images: ImageItem[],
  urls: string[],
  setting: Setting,
  perLoadNum: number,
  isAbort: boolean,
  isDownloading: boolean,
  isLoad: boolean
}

interface Props { }

export default class ListPage extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      urls: [],
      setting: getSetting(),
      perLoadNum: 30,
      isAbort: false,
      isDownloading: false,
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
    const { repository } = this.state.setting

    const data = await request({
      url: LIST_API_URL[repository](name),
      dataType: DATA_TYPE[repository],
      responseType: RESPONSE_TYPE[repository]
    })

    this.images = parseImages(data, repository)
    this.urls = this.images.map(img => img.src)
    this.showMoreImages(true)
  }

  showMoreImages = (reload?: boolean) => {
    const { images, urls, perLoadNum } = this.state
    const newImages = this.images.splice(0, perLoadNum)
    const newUrls = this.urls.splice(0, perLoadNum)

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
      const { name } = this.$router.params
      const { isAbort, images } = this.state
      const allImages = images.concat(this.images)
      const { src } = allImages[index]
      const nextIndex = index + 1

      Taro.showLoading({ title: `保存第${nextIndex}张中...` })
      const res: any = await Taro.downloadFile({ url: src })
      await Taro.saveImageToPhotosAlbum({ filePath: res.tempFilePath })
      Taro.setStorageSync(`DOWNLOAD ${name}`, nextIndex)

      if (nextIndex < allImages.length && !isAbort) {
        this.downloadImages(nextIndex)
      } else {
        this.setState({ isDownloading: false, isAbort: false })
        Taro.showToast({ title: `保存完成！`, duration: 5000 })
        !isAbort && Taro.removeStorageSync(`DOWNLOAD ${name}`)
      }
    } catch (err) {
      this.setState({ isDownloading: false })
      Taro.showToast({ title: '请授予保存图片权限', icon: 'none' })
    }
  }

  handleDownload = async () => {
    const { name } = this.$router.params

    const { confirm: downloadConfirm } = await Taro.showModal({
      title: '批量下载',
      content: '是否批量下载本类型全部表情包'
    })

    if (!downloadConfirm) return

    this.setState({ isDownloading: true })

    const downloadCount = Taro.getStorageSync(`DOWNLOAD ${name}`)

    if (!downloadCount) {
      this.downloadImages(0)
      return
    }

    const { confirm: continueConfirm } = await Taro.showModal({
      title: '断点下载',
      content: `是否从第 ${downloadCount} 张表情包开始下载`,
      confirmText: '是',
      cancelText: '否'
    })

    if (continueConfirm) {
      this.downloadImages(downloadCount)
    } else {
      this.downloadImages(0)
      Taro.removeStorageSync(`DOWNLOAD ${name}`)
    }
  }

  handleAbort = () => {
    this.setState({ isAbort: true })
  }

  handlePreview = (src) => {
    const urls = this.state.urls.concat(this.urls)
    Taro.previewImage({ urls, current: src })
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
    const setting = getSetting()
    const { perLineBQB } = setting
    const { windowHeight } = Taro.getSystemInfoSync()
    const perLoadNum = Math.ceil(windowHeight * perLineBQB / 375) * perLineBQB

    this.setState({ setting, perLoadNum  })
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
      title: `开源表情包 - ${this.$router.params.title}`,
      imageUrl: bannerImage
    }
  }

  render() {
    const { images = [], isDownloading, isLoad, setting } = this.state
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
          onClick={isDownloading ? this.handleAbort : this.handleDownload}
          onLongPress={this.randomImages}
        >
          {isDownloading
            ? <View className='at-icon at-icon-close' />
            : <View className='at-icon at-icon-download' />}
        </Button>
        {isDownloading && (
          <Ad
            className="ad"
            unitId="adunit-bdb2ef4d16f2f6ff"
            ad-type="video"
            ad-theme="white"
            ad-intervals={30}
          />
        )}
      </View>
    )
  }
}
