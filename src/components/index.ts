import SvgIcon from './SvgIcon/index.vue';
import SearchInput from './SearchInput/index.vue'
import Empty from './Empty/index.vue'
import ChatRoom from './ChatRoom/index.vue'
import OcButton from './OcButton/index.vue'
import OcTextarea from './OcTextarea/index.vue'
import PushpinCard from './PushpinCard/index.vue'
import OcDialog from './OcDialog/index.vue'
import DotBackground from './DotBackground/index.vue'
import OcInput from './OcInput/index.vue'
import OcMessage from './OcMessage/index.vue'
import OcSelect from './OcSelect/index.vue'

import type { App, Component } from 'vue';


const components: { [name: string]: Component } = { 
    SvgIcon, SearchInput, Empty, ChatRoom, OcButton,
    OcTextarea, PushpinCard, OcDialog, DotBackground,
    OcInput, OcMessage, OcSelect
};

export default {
    install(app: App) {
        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key]);
        })
    }
}