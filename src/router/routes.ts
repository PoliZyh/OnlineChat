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
                component: () => import('@/views/Friends/index.vue'),
                redirect: '/friends/friends-default',
                children: [
                    {
                        path: 'friends-default',
                        name: 'FriendsDefault',
                        component: () => import('@/views/Friends/components/Default/index.vue')
                    },
                    {
                        path: 'new-friend',
                        name: 'NewFriend',
                        component: () => import('@/views/Friends/components/NewFriend/index.vue')
                    },
                    {
                        path: 'new-group',
                        name: 'NewGroup',
                        component: () => import('@/views/Friends/components/NewGroup/index.vue')
                    },
                    {
                        path: ':id',
                        name: 'FriendsInfo',
                        component: () => import('@/views/Friends/components/Details/index.vue')
                    }
                ]
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
