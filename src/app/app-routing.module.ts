import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  // {
  //   path: 'home/:id',
  //   loadChildren: () => import('./pages/tabs/home/home.module').then(m => m.HomePageModule)
  // },

  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then(m => m.MessagePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
