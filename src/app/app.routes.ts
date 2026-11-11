import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products').then((m) => m.Products),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./components/product/product').then((m) => m.ProductComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./components/cart/cart').then((m) => m.Cart),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
