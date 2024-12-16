import { Router, Route } from 'electron-router-dom'

import { Login,  AnotherScreen } from 'renderer/screens'
import Home from './screens/About'
import CookBook from './screens/Cookbook'
import CookBookOpen from './screens/cookBookOpen/Opencook'
import RecipeView from './screens/viewRecipe/viewRecipe'
import RecipeEdit from './screens/editRecipe/editRecipe'
import Shopinglist from './screens/shopingList/shoping'
import ShopingView from './screens/viewShoping/viewShoping'
import AddRecipe from './screens/AddRecipe/AddRecipe'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/cookbook" element={<CookBook />} />
          <Route path="/snacksDetail" element={<CookBookOpen />} />
          <Route path="/viewRecipe" element={<RecipeView />} />
          <Route path="/shopingList" element={<Shopinglist />} />
          <Route path="/viewShopingList" element={<ShopingView />} />
          <Route path="/editRecipe" element={<RecipeEdit />} />
          <Route path="/AddRecipe" element={<AddRecipe />} />





        </>
      }
      about={<Route path="/" element={<Home />} />}
    />
  )
}
