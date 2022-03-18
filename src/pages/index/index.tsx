import Taro, { useShareAppMessage } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useTypes } from '../../utils/hooks'
import BQBItem from '../../components/bqb-item'
import bannerImage from '../../assets/banner.png'
import './index.less'

export default function IndexPage () {
  const { types } = useTypes()

  useShareAppMessage(() => {
    return {
      title: '开源表情包',
      imageUrl: bannerImage,
      path: '/pages/index/index'
    }
  })

  const handleNavigate = (type?: any) => {
    Taro.navigateTo({ url: `/pages/list/index?title=${type.name}&path=${type.fullname}` })
  }

  return (
    <View className="index list">
      {types.map(type => (
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
