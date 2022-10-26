export default [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '',
        naem: 'home',
        component: () => import('@/views/main/index.vue')
      }
    ]
  }
]
