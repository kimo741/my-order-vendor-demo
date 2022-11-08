/////////////////////////////////////////////////////
//////////////////// layouts ////////////////////////
/////////////////////////////////////////////////////
import HomeLayout from 'src/layouts/childes/HomeLayout.vue'
import OrderLayout from 'src/layouts/childes/OrderLayout.vue'
import ProductLayout from 'src/layouts/childes/ProductLayout.vue'
import ProfileLayout from 'src/layouts/childes/ProfileLayout.vue'
/////////////////////////////////////////////////////
//////////////////// pages //////////////////////////
/////////////////////////////////////////////////////
import OrdersPage from "src/pages/OrdersView.vue"
import ProductPage from 'src/pages/ProductPage'
import ProfilePage from 'src/pages/ProfilePage.vue'
import HomePage from 'src/pages/HomePage.vue'
//////////////////////////////////////////////////////
//////////////////// children ////////////////////////
/////////////////////////////////////////////////////
import GainChart from "src/pages/chart/ChartAllGain.vue"
import TopProduct from "src/components/UI/Dashboard/TopOrders.vue"
import SpacificOrder from 'src/components/orders/SpacificOrder.vue'
import AddAndEditProduct from 'src/components/products/AddAndEditProduct.vue'
/////////////////////////////////////////////////////
//////////////////// routs //////////////////////////
/////////////////////////////////////////////////////

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
    /////////////////////////////////////////////////
    //////////////// home container /////////////////
    /////////////////////////////////////////////////
      { path: '/',
        component: HomeLayout,
        name:"dashboard",
        children:[
          {
            path: '',
            component:HomePage,
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
          {
            path: 'add&edit',
            component: AddAndEditProduct,
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
      children:[
        {
          path:"",
          component:ProfilePage,
        }
      ]
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
