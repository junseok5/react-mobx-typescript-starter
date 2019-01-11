import { action, observable } from 'mobx'

export type ICounterStore = {
  count: number
  increase: () => void
  decrease: () => void
}

export class CounterStore {
  @observable public count: number = 0

  constructor(count: number) {
    this.count = count
  }

  @action.bound
  public increase() {
    this.count++
  }

  @action.bound
  public decrease() {
    this.count--
  }
}

export default new CounterStore(0)
