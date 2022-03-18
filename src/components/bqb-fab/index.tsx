import { View } from '@tarojs/components'
import './index.less'

export default function BQBFab ({
  className,
  children,
  onClick
}) {
  return (
    <View
      className={`bqb-fab ${className}`}
      onClick={onClick}
    >
      {children}
    </View>
  )
}
