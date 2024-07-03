import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentSuccessfulComponent } from './components/payment-successful/payment-successful.component';

export const routes: Routes = [
  { path: '', component: FrontpageComponent},
  { path: 'success', component: PaymentSuccessfulComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
