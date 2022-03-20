import Taro from '@tarojs/taro'

export const request = async (params: Taro.request.Option) => {
  const { data } = await Taro.request(params)
  return data
}

export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
