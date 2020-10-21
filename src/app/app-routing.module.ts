import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'me',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'register-page',
    loadChildren: () => import('./register-page/register-page.module').then( m => m.RegisterPagePageModule)
  },
  {
    path: 'forgot-page',
    loadChildren: () => import('./forgot-page/forgot-page.module').then( m => m.ForgotPagePageModule)
  },
  {
    path: 'profil-page',
    loadChildren: () => import('./profil-page/profil-page.module').then( m => m.ProfilPagePageModule)
  },
  {
    path: 'password-setting-page',
    loadChildren: () => import('./password-setting-page/password-setting-page.module').then( m => m.PasswordSettingPagePageModule)
  },
  {
    path: 'profil-setting-page',
    loadChildren: () => import('./profil-setting-page/profil-setting-page.module').then( m => m.ProfilSettingPagePageModule)
  },
  {
    path: 'add-client',
    loadChildren: () => import('./add-client/add-client.module').then( m => m.AddClientPageModule)
  },
  {
    path: 'fiche',
    loadChildren: () => import('./fiche-client-tab/fiche-client-tab.module').then( m => m.FicheClientTabPageModule)
  },
  {
    path: 'facture-tab',
    loadChildren: () => import('./facture-tab/facture-tab.module').then( m => m.FactureTabPageModule)
  },
  {
    path: 'devis-tab',
    loadChildren: () => import('./devis-tab/devis-tab.module').then( m => m.DevisTabPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
