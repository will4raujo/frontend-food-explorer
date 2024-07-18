import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dish } from '../pages/Dish';
import { DishForm } from '../pages/DishForm';
import { MyOrders } from '../pages/MyOrders';
import { Orders } from '../pages/Orders';
import { Favorites } from '../pages/Favorites';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/dish/edit/:id" element={<DishForm />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}
