// 1.引入alt,alt.jsx中导出的单例
// 2.创建类，构造中使用genereatAction(...args)生成回调Actions
// 3.使用alt单例createAction(className)创建Action,并默认导出

import alt from '../alt';

class ListAction {
  constructor() {
    this.generateActions('addItemSuccess');
  }

  addItem() {
    console.log(this);
    this.addItemSuccess('plm');
  }
}

export default alt.createActions(ListAction);