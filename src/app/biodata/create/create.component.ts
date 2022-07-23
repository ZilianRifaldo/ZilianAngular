import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Biodata } from '../biodata';
import { BiodataService } from '../biodata.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  biodataForm: Biodata = {
    id: 0,
    name: '',
    umur: 0,
    tinggi: 0,
  };

  constructor(private biodataService: BiodataService, private router: Router) {}

  ngOnInit(): void {}

  create() {
    this.biodataService.create(this.biodataForm).subscribe({
      next: (data) => {
        this.router.navigate(['/biodata/dashboard']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
