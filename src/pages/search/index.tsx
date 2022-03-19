import Taro, { useRouter, useState, useMemo, useShareAppMessage } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { useSearch } from '../../hooks'
import BQBItem from '../../components/bqb-item'
import BQBInput from '../../components/bqb-input'
import bannerImage from '../../assets/banner.png'
import './index.less'

export default function SearchPage () {
  const { params } = useRouter()
  const { data } = useSearch()
  const [keyword, setKeyword] = useState(params.keyword || '')
  const [randomCount, setRandomCount] = useState(0)

  const images = useMemo(() => {
    if (!keyword) return data.sort(() => (Math.random() > 0.5 ? -1 : 1)).slice(0, 12)
    return data.filter(item => item.name.includes(keyword)).slice(0, 99)
  }, [data, keyword, randomCount])

  const imageUrls = useMemo(() => images.map(item => item.imgSrc), [images])

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

  return (
    <View>
      <View className="search list">
        <BQBInput
          defaultValue={params.keyword}
          placeholder="请输入表情包关键词~"
          onChange={setKeyword}
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
