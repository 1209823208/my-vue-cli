import { Navigator } from '../navigator'

export default (Vue) => {
    Vue.$openRouter = Vue.prototype.$openRouter = Navigator.openRouter;
}