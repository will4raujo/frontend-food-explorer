import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dish } from '../pages/Dish';
import { DishForm } from '../pages/DishForm';
import { MyOrders } from '../pages/MyOrders';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/dish/edit/:id" element={<DishForm />} />
      <Route path="/orders" element={<MyOrders />} />
    </Routes>
  );
}
