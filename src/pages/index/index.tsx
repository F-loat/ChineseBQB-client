import Taro, { useShareAppMessage } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useTypes } from '../../hooks'
import BQBItem from '../../components/bqb-item'
import BQBInput from '../../components/bqb-input'
import bannerImage from '../../assets/banner.png'
import './index.less'

export default function IndexPage () {
  const { data } = useTypes()

  useShareAppMessage(() => {
    return {
      title: '开源表情包',
      imageUrl: bannerImage,
      path: '/pages/index/index'
    }
  })

  const handleSearch = (value) => {
    Taro.navigateTo({ url: `/pages/search/index?keyword=${value}` })
  }

  const handleNavigate = (type: any) => {
    Taro.navigateTo({ url: `/pages/list/index?title=${type.name}&path=${type.fullname}` })
  }

  return (
    <View className="index list">
      <BQBInput
        placeholder="请输入表情包关键词~"
        onSearch={handleSearch}
      />
      {data.map(type => (
        <BQBItem
          key={type.imgSrc}
          name={type.name}
          src={type.imgSrc}
          num={type.imgNum}
          showTitle
          onClick={() => handleNavigate(type)}
        />
      ))}
    </View>
  )
}

IndexPage.config = {
  navigationBarTitleText: '开源表情包'
}
