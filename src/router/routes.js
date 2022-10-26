import OrdersPage from "src/pages/OrdersView.vue"
import GainChart from "src/pages/chart/ChartAllGain.vue"

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
       component: () => import('pages/HomePage.vue')
       },
      ///////////////////////////////////////////////
      { path: '/order',
       component: OrdersPage,
        name:"orders"
      },
      { path: '/gain-chart',
       component: GainChart,
        name:"gain-chart"
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
