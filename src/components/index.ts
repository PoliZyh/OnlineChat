import SvgIcon from './SvgIcon/index.vue';
import SearchInput from './SearchInput/index.vue'
import Empty from './Empty/index.vue'
import ChatRoom from './ChatRoom/index.vue'

import type { App, Component } from 'vue';


const components: { [name: string]: Component } = { SvgIcon, SearchInput, Empty, ChatRoom };
export default {
    install(app: App) {
        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key]);
        })
    }
}