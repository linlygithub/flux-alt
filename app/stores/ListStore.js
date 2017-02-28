// 1.引入 alt,Actions;
// 2.构造函数中绑定Action,初始化state
// 3.createStore(ClassName)创建store并导出

import alt from '../alt';
import ListAction from '../actions/ListAction';

class ListStore {
  constructor() {
    this.bindActions(ListAction);
    this.items = ['qwertyu', 'asdfg', 'zxcvbn'];
  }

  addItemSuccess(itemName) {
    this.items.push(itemName);
  }
}

export default alt.createStore(ListStore);