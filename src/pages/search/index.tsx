import Taro, { useRouter, useState, useMemo, useShareAppMessage } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { random } from '../../utils'
import { useSearch, usePagenation } from '../../hooks'
import BQBItem from '../../components/bqb-item'
import BQBInput from '../../components/bqb-input'
import bannerImage from '../../assets/banner.png'
import './index.less'

export default function SearchPage () {
  const { params } = useRouter()
  const { data } = useSearch()
  const [randomCount, setRandomCount] = useState(0)
  const [keyword, setKeyword] = useState(params.keyword || '')

  const filteredImages = useMemo(() => {
    if (!data.length) return []
    if (!keyword) return Array(12).fill(null).map(() => data[random(0, data.length)])
    return data.filter(item => item.name.includes(keyword))
  }, [data, keyword, randomCount])

  const { currentData: images, setPageNum } = usePagenation({ data: filteredImages })

  const imageUrls = useMemo(() => filteredImages.map(item => item.imgSrc), [filteredImages])

  useShareAppMessage(() => {
    return {
      title: keyword ? `开源表情包 - ${keyword}` : '开源表情包',
      imageUrl: bannerImage,
      path: `/pages/search/index?keyword=${keyword}`
    }
  })

  const handlePreview = (src) => {
    Taro.previewImage({
      urls: imageUrls,
      current: src
    })
  }

  const handleSearch = (keyword) => {
    setKeyword(keyword)
    setPageNum(1)
  }

  return (
    <View>
      <View className="search list">
        <BQBInput
          defaultValue={params.keyword}
          placeholder="请输入表情包关键词~"
          onChange={handleSearch}
        />
        {images.map(img => (
          <BQBItem
            key={img.imgSrc}
            name={img.name}
            src={img.imgSrc}
            showTitle
            onClick={() => handlePreview(img.imgSrc)}
          />
        ))}
      </View>
      {!keyword && (
        <View className="random-btn-wrapper">
          <Button
            type="primary"
            size="mini"
            className="random-btn"
            onClick={() => setRandomCount(randomCount + 1)}
          >
            随机推荐
          </Button>
        </View>
      )}
      {keyword && !images.length && (
        <View className="no-result">还没有相关结果！</View>
      )}
    </View>
  )
}

SearchPage.config = {
  navigationBarTitleText: '开源表情包'
}
