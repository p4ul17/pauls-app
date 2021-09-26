import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalmoneyPage } from './localmoney.page';

const routes: Routes = [
  {
    path: '',
    component: LocalmoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalmoneyPageRoutingModule {}
