const routes = [
  { 
    path: '/', 
    component: () => import('../views/LandingView.vue'),
    name:'Landing',
  },
]

export default routes