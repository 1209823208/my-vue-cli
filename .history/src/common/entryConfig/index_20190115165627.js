import { Navigator } from '../index'

export default (Vue) => {
    Vue.$openRouter = Vue.prototype.$openRouter = Navigator.openRouter;
}