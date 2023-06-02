import { lazy } from 'react'

const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))
const NotFound = lazy(() => import('../pages/notFound'))

const routes = [
  {
    path:'/',
    exact: true,
    component: Home,
    name:'Home'
  },
  {
    path:'/home',
    component: Home,
    name:'Home'
  },
  {
    path:'/about',
    component: About,
    name:'About'
  },
  {
    path: '/404',
    component: NotFound,
  },
]
export default routes