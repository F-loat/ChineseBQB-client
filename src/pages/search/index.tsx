import Taro, { useState, useMemo, useShareAppMessage } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useSearch } from '../../hooks'
import BQBItem from '../../components/bqb-item'
import BQBInput from '../../components/bqb-input'
import bannerImage from '../../assets/banner.png'
import './index.less'

export default function SearchPage () {
  const { data } = useSearch()
  const [keyword, setKeyword] = useState('')

  const images = useMemo(() => {
    if (!keyword) return []
    return data.filter(item => item.name.includes(keyword)).slice(0, 99)
  }, [data, keyword])

  const imageUrls = useMemo(() => images.map(item => item.imgSrc), [images])

  useShareAppMessage(() => {
    return {
      title: keyword ? `开源表情包 - ${keyword}` : '开源表情包',
      imageUrl: bannerImage,
      path: '/pages/search/index'
    }
  })

  const handlePreview = (src) => {
    Taro.previewImage({
      urls: imageUrls,
      current: src
    })
  }

  return (
    <View className="index list">
      <BQBInput
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
      {!images.length && <View className="no-result">还没有相关结果！</View>}
    </View>
  )
}

SearchPage.config = {
  navigationBarTitleText: '开源表情包'
}
