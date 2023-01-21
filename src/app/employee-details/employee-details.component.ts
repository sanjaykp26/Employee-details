import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  user: any = {};
  employeeForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', [Validators.required, Validators.minLength(5)]],
    date: ['', [Validators.required]],
    Role: ['', [Validators.required]],
    number: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    gender: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  submit() {
    this.user = Object.assign(this.user, this.employeeForm.value);
    this.addUser(this.user);
    this.router.navigateByUrl('/view');
  }

  addUser(user: any) {
    let users: any = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') || '');
      if (!Array.isArray(users)) {
        users = [users];
      }
    }
    users.push(user);
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
