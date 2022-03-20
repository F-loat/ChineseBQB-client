import { useState, useMemo, useReachBottom } from '@tarojs/taro'

export default function usePagenation<T>({ data }: { data: T[] }) {
  const pageSize = 21
  const [pageNum, setPageNum] = useState(1)

  const currentData = useMemo(() => data.slice(0, pageNum * pageSize), [data, pageNum])

  useReachBottom(() => {
    if (pageNum * pageSize >= data.length) return
    setPageNum(pageNum + 1)
  })

  return {
    currentData,
    setPageNum,
  }
}

