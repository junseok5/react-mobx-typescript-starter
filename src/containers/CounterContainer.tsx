import { inject, observer } from 'mobx-react'
import * as React from 'react'
import Counter from 'components/Counter'
import { ICounterStore } from 'stores/counter'

interface IProps {
  counter: ICounterStore
}

@inject('counter')
@observer
class CounterContainer extends React.Component<IProps, {}> {
  public render() {
    const store = this.props.counter as ICounterStore
    const { count, increase, decrease } = store

    return <Counter count={count} increase={increase} decrease={decrease} />
  }
}

export default CounterContainer
