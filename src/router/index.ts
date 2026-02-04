import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import i18n from '@/locales/i18n'
import Home from '@/views/Home/index.vue'

export const configRoutes = {
    path: 'config',
    name: 'Config',
    component: () => import('@/views/Config/index.vue'),
    children: [
        {
            path: '',
            redirect: { name: 'PersonConfig' },
        },
        {
            path: 'person',
            name: 'PersonConfig',
            component: () => import('@/views/Config/Person/index.vue'),
            meta: {
                title: i18n.global.t('sidebar.personConfiguration'),
                icon: 'person',
            },
            children: [
                {
                    path: '',
                    redirect: { name: 'AllPersonConfig' },
                },
                {
                    path: 'all',
                    name: 'AllPersonConfig',
                    component: () => import('@/views/Config/Person/PersonAll/index.vue'),
                    meta: {
                        title: i18n.global.t('sidebar.personList'),
                        icon: 'all',
                    },
                },
                {
                    path: 'already',
                    name: 'AlreadyPerson',
                    component: () => import('@/views/Config/Person/PersonAlready/index.vue'),
                    meta: {
                        title: i18n.global.t('sidebar.winnerList'),
                        icon: 'already',
                    },
                },
                // {
                //     path:'other',
                //     name:'OtherPersonConfig',
                //     component:()=>import('@/views/Config/Person/OtherPersonConfig.vue'),
                //     meta:{
                //         title:'其他配置',
                //         icon:'other'
                //     }
                // }
            ],
        },
        {
            path: 'prize',
            name: 'PrizeConfig',
            component: () => import('@/views/Config/Prize/PrizeConfig.vue'),
            meta: {
                title: i18n.global.t('sidebar.prizeConfiguration'),
                icon: 'prize',
            },
        },
        {
            path: 'global',
            name: 'GlobalConfig',
            meta: {
                title: i18n.global.t('sidebar.globalSetting'),
                icon: 'global',
            },
            children: [
                {
                    path: '',
                    redirect: { name: 'FaceConfig' },
                },
                {
                    path: 'face',
                    name: 'FaceConfig',
                    component: () => import('@/views/Config/Global/FaceConfig/index.vue'),
                    meta: {
                        title: i18n.global.t('sidebar.viewSetting'),
                        icon: 'face',
                    },
                },
                {
                    path: 'image',
                    name: 'ImageConfig',
                    component: () => import('@/views/Config/Global/ImageConfig/index.vue'),
                    meta: {
                        title: i18n.global.t('sidebar.imagesManagement'),
                        icon: 'image',
                    },
                },
                {
                    path: 'music',
                    name: 'MusicConfig',
                    component: () => import('@/views/Config/Global/MusicConfig/index.vue'),
                    meta: {
                        title: i18n.global.t('sidebar.musicManagement'),
                        icon: 'music',
                    },
                },
            ],
        },
        {
            path: 'server',
            name: 'Server',
            component: () => import('@/views/Config/Server/index.vue'),
            meta: {
                hidden: import.meta.env.VITE_ENABLE_WEBSOCKET !== 'true',
                title: i18n.global.t('sidebar.server'),
                icon: 'server',
            },
        },
        {
            path: 'readme',
            name: 'Readme',
            component: () => import('@/views/Config/Readme/index.vue'),
            meta: {
                title: i18n.global.t('sidebar.operatingInstructions'),
                icon: 'readme',
            },
        },
    ],
}
const routes = [
    {
        path: '/log-lottery',
        redirect: '/home',
    },
    {
        path: '/log-lottery/:pathMatch(.*)*',
        redirect: (to: any) => {
            const nextPath = to.fullPath.replace(/^\/log-lottery/, '')
            return nextPath === '' ? '/home' : nextPath
        },
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                redirect: '/home',
            },
            {
                path: 'home',
                name: 'Home',
                component: Home,
            },
            {
                path: 'demo',
                name: 'Demo',
                component: () => import('@/views/Demo/index.vue'),
            },
            {
                path: 'mobile',
                name: 'Mobile',
                meta: {
                    isMobile: true,
                },
                component: () => import('@/views/Mobile/index.vue'),
            },
            configRoutes,
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home',
    },
]
const envMode = import.meta.env.MODE
const router = createRouter({
    // 读取环境变量
    history: (envMode === 'file' || import.meta.env.TAURI_PLATFORM) ? createWebHashHistory() : createWebHistory(),
    routes,
})

export default router
