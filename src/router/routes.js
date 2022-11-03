import HomeLayout from 'src/layouts/childes/HomeLayout.vue'
import OrderLayout from 'src/layouts/childes/OrderLayout.vue'
import ProductLayout from 'src/layouts/childes/ProductLayout.vue'
import ProfileLayout from 'src/layouts/childes/ProfileLayout.vue'

// /////////////////////////////////////////////////
import OrdersPage from "src/pages/OrdersView.vue"
import GainChart from "src/pages/chart/ChartAllGain.vue"
import TopProduct from "src/components/UI/Dashboard/TopOrders.vue"
import ProductPage from 'src/pages/ProductPage'
import SpacificOrder from 'src/components/orders/SpacificOrder.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
    //////////////////////////
    ////// home container/////
    //////////////////////////
      { path: '/',
        component: HomeLayout,
        name:"dashboard",
        children:[
          {
            path: '',
            component: () => import('pages/HomePage.vue')
          },
          {
            path: 'top-products',
            component: TopProduct,
            name:"top-products"
          },
          {
            path: 'gain-chart',
            component: GainChart,
            name:"gain-chart"
          },
        ]
      },
    ///////////////////////////
    ////// order container/////
    ///////////////////////////
      {
        path: '/order',
        component: OrderLayout,
        name:"order",
        children:[
          {
            path: '',
            component: OrdersPage,
            name:"orders"
          },
          {
            path: 'sapcific:id:code',
            component: SpacificOrder,
            name:"sapcific",
            props:true
          },
        ]
      },
    /////////////////////////////
    ////// product container/////
    ////////////////////////////
    {
      path: '/products',
      component: ProductLayout,
      name:"products",
      children:[
          {
            path: '',
            component: ProductPage,
          },
      ]
    },
    /////////////////////////////
    ////// profile container/////
    /////////////////////////////
    {
      path: '/profile',
      component: ProfileLayout,
      name:"profile",
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
