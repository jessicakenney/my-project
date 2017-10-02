import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PastComponent } from './past/past.component';
import { TechnicalComponent } from './technical/technical.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'past',
    component: PastComponent
  },
  {
    path: 'past/technical',
    component: TechnicalComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
