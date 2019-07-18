import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/list/index',
      'pages/about/index',
    ],
    window: {
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '中国表情包',
      navigationBarTextStyle: 'black',
      backgroundTextStyle: 'dark'
    }
  }

  checkUpdate = () => {
    const updateManager = Taro.getUpdateManager()

    updateManager.onUpdateReady(async () => {
      Taro.clearStorage()

      const { confirm } = await Taro.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？'
      })

      if (confirm) updateManager.applyUpdate()
    })
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      this.checkUpdate()
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
