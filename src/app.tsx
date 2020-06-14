import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import 'taro-ui/dist/style/index.scss'
import './app.less'

class App extends Component {
  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      this.checkUpdate()
    }
  }

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
      'pages/list/index'
    ],
    window: {
      navigationBarTitleText: '开源表情包',
      backgroundColor: '@bgColor',
      backgroundTextStyle: '@bgTxtStyle',
      navigationBarBackgroundColor: '@navBgColor',
      navigationBarTextStyle: '@navTxtStyle'
    },
    darkmode: true,
    themeLocation: 'theme.json',
    style: 'v2'
  }

  checkUpdate = () => {
    const updateManager = Taro.getUpdateManager()

    updateManager.onUpdateReady(async () => {
      const { confirm } = await Taro.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？'
      })

      if (confirm) updateManager.applyUpdate()

      Taro.clearStorage()
    })
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
