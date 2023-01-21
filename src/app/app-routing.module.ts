import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { VeiwEmployeeComponent } from './veiw-employee/veiw-employee.component';

const routes: Routes = [
  { 
    path:"", redirectTo:"add",pathMatch:"full"},
    {
      path:'add' , component:EmployeeDetailsComponent
    },
    
    {path: "view", component:VeiwEmployeeComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
