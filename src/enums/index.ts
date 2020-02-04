export const BASE_URL = 'https://proxy.youngon.com.cn/github'

export const RESPONSE_TYPE: { [key: string]: keyof Taro.request.responseType } = {
  'zhaoolee/ChineseBQB': 'text'
}

export const DATA_TYPE: { [key: string]: keyof Taro.request.dataType } = {
  'zhaoolee/ChineseBQB': '其他',
  'getActivity/EmojiPackage': 'json'
}

export const INDEX_API_URL = {
  'zhaoolee/ChineseBQB': BASE_URL + '/raw/zhaoolee/ChineseBQB/master/README.md',
  'getActivity/EmojiPackage': BASE_URL + '/api/repos/getActivity/EmojiPackage/contents'
}

export const LIST_API_URL = {
  'zhaoolee/ChineseBQB': name => (BASE_URL + `/raw/zhaoolee/ChineseBQB/master/source/_posts/${name}.md`),
  'getActivity/EmojiPackage': name => (BASE_URL + `/api/repos/getActivity/EmojiPackage/contents/${name}`)
}

export const ABOUT_API_URL = {
  'zhaoolee/ChineseBQB': BASE_URL + '/raw/zhaoolee/ChineseBQB/master/README.md',
  'getActivity/EmojiPackage': BASE_URL + '/raw/getActivity/EmojiPackage/master/README.md'
}
