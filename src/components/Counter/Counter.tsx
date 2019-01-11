import * as React from 'react'
import cx from 'classnames'
import './Counter.css'

interface IProps {
  count: number
  increase: () => void
  decrease: () => void
}

const Counter: React.SFC<IProps> = ({ count, increase, decrease }) => {
  return (
    <div className={cx('counter')}>
      <h1>
        {count}
      </h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  )
}

export default Counter
