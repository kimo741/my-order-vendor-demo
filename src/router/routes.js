/////////////////////////////////////////////////////
//////////////////// layouts ////////////////////////
/////////////////////////////////////////////////////
import HomeLayout from 'src/layouts/childes/HomeLayout.vue'
import OrderLayout from 'src/layouts/childes/OrderLayout.vue'
import ProductLayout from 'src/layouts/childes/ProductLayout.vue'
import ProfileLayout from 'src/layouts/childes/ProfileLayout.vue'
// import CheatePost from 'src/pages/CreatePost.vue'
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
import NofifyPage from "src/components/UI/Dashboard/NotifyPage.vue"
import TopProduct from "src/components/UI/Dashboard/TopOrders.vue"
import SpacificOrder from 'src/components/orders/SpacificOrder.vue'
import AddAndEditProduct from 'src/components/products/AddAndEditProduct.vue'
import SpacificPost from 'src/components/profile/SpacificPost.vue'
import setting from 'src/components/profile/VendorSeting.vue'
import EditPersolInfo from 'src/components/profile/setting/EditPersolInfo.vue'
import EditUserInfo from 'src/components/profile/setting/Personal/EditUserInfo.vue'
import EditPhoneNumber from 'src/components/profile/setting/Personal/EditPhoneNumber.vue'
import ChangePassword from 'src/components/profile/setting/Personal/ChangePassword.vue'
import ChangeEmail from 'src/components/profile/setting/Personal/ChangeEmail.vue'
import EditAdress from 'src/components/profile/setting/Personal/EditAdress.vue'
import PaymentsAndWallet from 'src/components/profile/setting/PaymentsAndWallet.vue'
import SaleCode from 'src/components/profile/setting/SaleCode.vue'
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
          {
            path: 'notifcation',
            component:NofifyPage ,
            name:"notify"
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
        },
        {
          path:"setting",
          component:setting,
          name:"setting",
        },
        {
          path:"post:post",
          component:SpacificPost,
          props:true,
          name:"spacificPost"
        },
        {
          path:"edit-info",
          component:EditPersolInfo,
          name:"EditPersolInfo"
        },
        {
          path:"user-info",
          component:EditUserInfo,
          name:"EditUserName"
        },
        {
          path:"edit-phone-number",
          component:EditPhoneNumber,
          name:"EditPhoneNumber"
        },
        {
          path:"change-password",
          component:ChangePassword,
          name:"ChangePassword"
        },
        {
          path:"change-emailadress",
          component:ChangeEmail,
          name:"ChangeEmail"
        },
        {
          path:"change-adress",
          component:EditAdress,
          name:"EditAdress"
        },
        {
          path:"Payments&Wallet",
          component:PaymentsAndWallet,
          name:"PaymentsAndWallet"
        },
        {
          path:"sale-code",
          component:SaleCode,
          name:"SaleCode"
        },
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
