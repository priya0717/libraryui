import { studentinfcomponent } from ".studentinfstudentinf.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { CalculatorComponent } from "./calculator/calculator.component";
import { ProfileComponent } from "./profile/profile.component";



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'calculator', component: CalculatorComponent},
      { path: 'studentinf', component: studentinfcomponent}
    ]
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class AccountRoutingModule {}
