import Taro, { useShareAppMessage } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useTypesMap } from '../../utils/hooks'
import BQBItem from '../../components/bqb-item'
import bannerImage from '../../assets/banner.png'
import './index.less'

interface TypeItem {
  name: string,
  link?: string,
  imgNum?: number,
  imgSrc?: string
}

export default function IndexPage () {
  const { typesMap } = useTypesMap(true);

  const types: TypeItem[] = typesMap ? Object.keys(typesMap).map(key => {
    return {
      key,
      name: key.replace(/^(\w)*/, '').replace(/BQB$/, ''),
      ...typesMap[key]
    }
  }) : []

  useShareAppMessage(() => {
    return {
      title: '开源表情包',
      imageUrl: bannerImage,
      path: '/pages/index/index'
    }
  })

  const handleNavigate = (type?: any) => {
    Taro.navigateTo({ url: `/pages/list/index?key=${type.key}&title=${type.name}` })
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
