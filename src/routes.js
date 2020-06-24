import VueRouter from 'vue-router'

import Home from './components/pages/Home'
import CreateData from './components/pages/CreateData'
import UpdateData from './components/pages/UpdateData'
import DropData from './components/pages/DropData'


export default new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/CreateData',
            component: CreateData
        },
        {
            path: '/UpdateData',
            component: UpdateData
        },
        {
            path: '/DropData',
            component: DropData
        },
    ],
})
