import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'tela', loadChildren: './tela/tela.module#TelaPageModule' },
  { path: 'ion-badge', loadChildren: './ion-badge/ion-badge.module#IonBadgePageModule' },
  { path: 'ion-button', loadChildren: './ion-button/ion-button.module#IonButtonPageModule' },
  { path: 'ion-checkbox', loadChildren: './ion-checkbox/ion-checkbox.module#IonCheckboxPageModule' },
  { path: 'ion-chip', loadChildren: './ion-chip/ion-chip.module#IonChipPageModule' },
  { path: 'ion-datetime', loadChildren: './ion-datetime/ion-datetime.module#IonDatetimePageModule' },
  { path: 'ion-radio', loadChildren: './ion-radio/ion-radio.module#IonRadioPageModule' },
  { path: 'ion-range', loadChildren: './ion-range/ion-range.module#IonRangePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
