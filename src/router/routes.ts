import type { RouteRecordRaw } from "vue-router"

const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('@/layout/index.vue'),
        redirect: '/chat-home',
        children: [
            {
                path: 'chat-home',
                name: 'ChatHome',
                component: () => import('@/views/ChatHome/index.vue'),
                children: [
                    {
                        path: '',
                        name: 'Default',
                        component: () => import('@/views/ChatHome/components/Default/index.vue')
                    },
                    {
                        path: ':id',
                        name: 'ChatOnHome',
                        component: () => import('@/components/ChatRoom/index.vue')
                    }
                ]
            },
            {
                path: 'friends',
                name: 'Friends',
                component: () => import('@/views/Friends/index.vue')
            },
            {
                path: 'space',
                name: 'Space',
                component: () => import('@/views/Space/index.vue')
            },
            {
                path: 'world',
                name: 'World',
                component: () => import('@/views/World/index.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/index.vue')
    }
]


export {
    constantRoutes
}
