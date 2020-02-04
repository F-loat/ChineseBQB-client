import Taro, { Component, Config } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import { AtForm, AtSlider, AtSwitch } from 'taro-ui'
import { getSetting, Setting } from '../../utils'
import './index.less'

interface State {
  setting: Setting
}

interface Props { }

export default class SettingPage extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      setting: getSetting()
    }
  }

  config: Config = {
    navigationBarTitleText: '设置'
  }

  updateSetting = (write?: boolean) => {
    if (write) {
      const { setting } = this.state
      Taro.setStorageSync('setting', setting)
    } else {
      this.setState({ setting: getSetting() })
    }
  }

  handleSettingChange = (key, value) => {
    const { setting } = this.state
    this.setState({
      setting: { ...setting, [key]: value }
    }, () => this.updateSetting(true))
  }

  componentDidShow() {
    this.updateSetting()
  }

  render() {
    const repositories = ['zhaoolee/ChineseBQB', 'getActivity/EmojiPackage']
    const { repository, perLineBQB, showBQBTitle } = this.state.setting

    return (
      <View className="setting">
        <AtForm>
          <View className="form-item">
            <Picker
              value={repositories.indexOf(repository)}
              mode="selector"
              range={repositories}
              onChange={({ detail }) => this.handleSettingChange('repository', repositories[detail.value])}
            >
              <View className="form-item-title">表情包源：{repository}</View>
            </Picker>
          </View>
          <View className="form-item">
            <View className="form-item-title">每行图片数量</View>
            <AtSlider
              min={1}
              max={6}
              activeColor="#000"
              showValue
              value={perLineBQB}
              onChange={({ value }) => this.handleSettingChange('perLineBQB', value)}
            />
          </View>
          <AtSwitch
            title="展示图片标题"
            color="#000"
            checked={showBQBTitle}
            onChange={(value) => this.handleSettingChange('showBQBTitle', value)}
          />
        </AtForm>
      </View>
    )
  }
}
