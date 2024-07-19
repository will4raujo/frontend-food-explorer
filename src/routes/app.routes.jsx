import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { DishForm } from '../pages/DishForm'
import { MyOrder } from '../pages/MyOrder'
import { Orders } from '../pages/Orders'
import { Favorites } from '../pages/Favorites'
import { NotFound } from '../pages/404'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dish/:id' element={<Dish />} />
      <Route path='/dish/edit/:id' element={<DishForm />} />
      <Route path='/my-order' element={<MyOrder />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
