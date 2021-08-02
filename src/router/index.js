import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('views/Home'),
    meta: {
      keepAlive: true // 需要被缓存
    },
    children: [
      {
        path: '/',
        component: () => import('components/Article'),
      },
      {
        path: '/article/:id',
        name: 'Article',
        component: () => import('components/Article'),
      },
    ]
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('views/Blog'),
    meta: {
      keepAlive: true // 需要被缓存
    },
    redirect: "/blog",
    children: [
      {
        path: '/blog',
        component: () => import('components/Article')
      }
    ]
  },
  {
    path: '/philosophy',
    name: 'Philosophy',
    component: () => import('views/Philosophy'),
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('views/About'),
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/recordlife',
    name: 'Recordlife',
    component: () => import('views/Recordlife'),
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/sentiment',
    name: 'Sentiment',
    component: () => import('views/Sentiment'),
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
]


const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
