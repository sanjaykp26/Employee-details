import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiw-employee',
  templateUrl: './veiw-employee.component.html',
  styleUrls: ['./veiw-employee.component.css'],
})
export class VeiwEmployeeComponent implements OnInit {
  employees: any;


  constructor() {}

  ngOnInit(): void {
    this.employees = JSON.parse(localStorage.getItem('Users')||"");
  }
}
