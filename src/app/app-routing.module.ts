import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'first', loadChildren: () =>
      import('./first/first.module').then(m => m.FirstModule)
  },
  {
    path: 'second', loadChildren: () =>
      import('./second/second.module').then(m => m.SecondModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
