import Vue from 'vue'
import App from './page1.vue'
import router from './router'
import store from '@/store/'
import entryConfig from '_lib/entryConfig'

entryConfig(Vue)
function formatComponentName(vm) {
  if (vm.$root === vm) return "root";

  var name = vm._isVue
      ? (vm.$options && vm.$options.name) ||
        (vm.$options && vm.$options._componentTag)
      : vm.name;
  return (
      (name ? "component <" + name + ">" : "anonymous component") +
      (vm._isVue && vm.$options && vm.$options.__file
          ? " at " + (vm.$options && vm.$options.__file)
          : "")
  );
}

Vue.config.errorHandler = function(err, vm, info) {
  if (vm) {
      var componentName = formatComponentName(vm);
      var propsData = vm.$options && vm.$options.propsData;
      fundebug.notifyError(err, {
          metaData: {
              componentName: componentName,
              propsData: propsData,
              info: info
          }
      });
  } else {
      fundebug.notifyError(err);
  }
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
