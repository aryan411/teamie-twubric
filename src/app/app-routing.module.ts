import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwubricComponent } from './twubric/twubric.component';

const routes: Routes = [{ path: '', component: TwubricComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
