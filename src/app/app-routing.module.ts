import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
 
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
    path: 'tabs/search',
    loadChildren: () => import('./pages/tabs/search/search.module').then(m => m.SearchPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
