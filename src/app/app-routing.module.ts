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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
