import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Components/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'onbording',
    loadChildren: () => import('./Shared/onbording/onbording.module').then( m => m.OnbordingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Shared/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./Shared/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-category',
    loadChildren: () => import('./Components/product-category/product-category.module').then(m => m.ProductCategoryPageModule)
  },
  {
    path: 'product-filter',
    loadChildren: () => import('./Shared/product-filter/product-filter.module').then( m => m.ProductFilterPageModule)
  },
  {
    path: 'order-checkout',
    loadChildren: () => import('./Shared/order-checkout/order-checkout.module').then( m => m.OrderCheckoutPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
