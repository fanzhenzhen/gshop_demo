import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop'
import Goods from '../pages/Shop/Goods/Goods.vue'
import Rating from '../pages/Shop/Rating/Rating.vue'
import Info from '../pages/Shop/Info/Info.vue'

export default[
  {
    path:'/msite',
    component:Msite,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/shop',
    component:Shop,
    children:[
      {
        path:'goods',
        component:Goods
      },
      {
        path:'rating',
        component:Rating
      },
      {
        path:'info',
        component:Info
      },
     
      {
        path: '/shop',
        redirect: '/shop/goods'
      }
    ]
    
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect:'/msite'
  }
]