import * as components from "./components"
import type { App} from "vue";
const componentsList = components?.default as any;
const AuthComponents = {
    install(Vue:App) {
        Object.keys(componentsList).forEach(name => {
            Vue.component(name, componentsList[name]);
        })
    }
}

export default AuthComponents