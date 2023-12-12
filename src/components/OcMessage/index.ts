import OcMessage from './index.vue'
import { createVNode, render } from "vue";

interface MessageOptions {
    type: 'success' | 'error';
    message: string;
}

//      定义一个div容器
const div = document.createElement("div");
//      将定义的容器添加到dom上
document.body.appendChild(div);
//      定义定时器：一定时间后清除
let timer: null | NodeJS.Timeout = null;

export const showMessage = ({ type, message }: MessageOptions) => {
    const vnode = createVNode(OcMessage, { message, type });
    //      调用渲染方法：将虚拟节点渲染到dom中
    render(vnode, div);
    //      开启定时器，若原先存在则先进行清除
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
        render(null, div);
    }, 2000);
};