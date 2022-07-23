import { Component, OnInit } from '@angular/core';
import { Biodata } from '../biodata';
import { BiodataService } from '../biodata.service';

declare var window: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allBiodata: Biodata[] = [];
  constructor(private BiodataService: BiodataService) {}

  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }

  get() {
    this.BiodataService.get().subscribe((data) => {
      this.allBiodata = data;
    });
  }

  confirmDeleteModal(id: number) {
    this.idToDelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.BiodataService.delete(this.idToDelete).subscribe((data) => {
      this.allBiodata = this.allBiodata.filter((_) => _.id !== this.idToDelete);
      this.deleteModal.hide();
    });
  }
}
