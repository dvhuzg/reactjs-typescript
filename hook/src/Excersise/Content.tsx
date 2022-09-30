//test for useCallback and React.memo
import React, { memo } from 'react'

const Content = ({onCount}:any) => {
console.log("first")
  return (
    <div>
        <div>Hello 500 anh em</div>
        <button onClick={onCount}>Click me!</button>
    </div>
  )
}

export default memo(Content)