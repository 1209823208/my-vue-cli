import Navigator from '../navigator'

export default (Vue) => {
    console.log('Navigator',Navigator)
    Vue.$openRouter = Vue.prototype.$openRouter = Navigator.openRouter;
}