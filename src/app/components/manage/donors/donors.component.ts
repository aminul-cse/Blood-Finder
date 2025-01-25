import { Component, inject, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DonorService } from '../../../services/donor.service';
import { Area } from '../../../interfaces/area';

@Component({
  selector: 'app-donors',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, RouterLink],
  templateUrl: './donors.component.html',
  styleUrl: './donors.component.scss'
})
export class DonorsComponent {
  displayedColumns: string[] = ['bloodGroup', 'name', 'phone', 'address','shortDescription', 'action'];
  dataSource: MatTableDataSource<Area>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  productService=inject(DonorService);

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([] as any);
  }

  ngOnInit(): void {
    this.getProductList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
// get area list from service
  getProductList() {
    this.productService.getAllDonors().subscribe((result: any)=> {
      this.dataSource.data =result;
    })
  }

  delete(id:string) {
    this.productService.deleteDonor(id).subscribe((result: any)=> {
      alert("Donor deleted sucessfully");
      this.getProductList();
    })
  }

}
