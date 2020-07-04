import { registerComponents, vueUse } from './../../utils';

import dAlert from './Alert.vue';

const components = {
    dAlert
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
