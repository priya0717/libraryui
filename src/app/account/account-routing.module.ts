import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { CalculatorComponent } from "./calculator/calculator.component";
import { ProfileComponent } from "./profile/profile.component";
import { StudentprofileComponent } from './studentprofile/studentprofile.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'calculator', component: CalculatorComponent},
      { path: 'studentprofile', component: StudentprofileComponent}
    ]
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class AccountRoutingModule {}
