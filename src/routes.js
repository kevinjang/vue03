import VueRouter from 'vue-router'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

let routers = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/dashboard/page1' },
        { path: '/login', component: Login },
        {
            path: '/dashboard', component: Dashboard,
            children: [
                {
                    path: 'page1', component: Page1
                },
                {
                    path: 'page2', component: Page2
                },
                {
                    path: 'page3/:id', props: true, component: Page3
                },
                {
                    path: 'login', component: Login
                }]
        },
    ]
})

routers.beforeEach((to, from, next) => {
    console.log('beforeEach:', to)
    if (to.path !== '/login') {
        next()
    }else{
        setTimeout(()=>{
            next()
        },2000)
    }
    // next()
})

routers.beforeResolve((to, from, next)=>{
next()
})

routers.afterEach((to, from) => {
    // 此处不需要next 
    console.log('afterEach:', to)
})
export default routers
