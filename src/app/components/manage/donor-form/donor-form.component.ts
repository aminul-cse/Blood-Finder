import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatLabel } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { DonorService } from '../../../services/donor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from '../../../services/area.service';
import { Area } from '../../../interfaces/area';

@Component({
  selector: 'app-donor-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatLabel, MatButtonModule, MatSelectModule],
  templateUrl: './donor-form.component.html',
  styleUrl: './donor-form.component.scss'
})
export class DonorFormComponent implements OnInit {
  id! : string;
  router = inject(Router);
  activeRouter = inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);
  donorForm = this.formBuilder.group({
    name: [null,[Validators.required, Validators.minLength(3)]],
    phone: [null, [Validators.required]],
    bloodGroup: [null,[Validators.required]],
    address: [null, [Validators.required]],
    shortDescription: [null],
    areaId: [null],
  })

  productService = inject(DonorService);
  areaService = inject(AreaService);
  areas: Area[] = [];

  ngOnInit(): void {
    this.getAreaList()
    this.id = this.activeRouter.snapshot.params["id"];
    if(this.id){
      this.productService.getDonorById(this.id).subscribe((result : any)=>{
        this.donorForm.patchValue(result as any);
      })
    } else {

    }
  }

  getAreaList() {
    this.areaService.getAreas().subscribe((result: any) => {
      this.areas = result;
    })
  }

  addDonor() {
    let value = this.donorForm.value
    this.productService.addDonor(value as any).subscribe((result: any) => {
      alert("Donor create successfully")
      this.router.navigateByUrl('/admin/donors');
    });
  }

  updateDonor(){
    let value = this.donorForm.value
    this.productService.updateDonor(this.id, value as any).subscribe((result: any) => {
      alert("Donor update successfully")
      this.router.navigateByUrl('/admin/donors');
    });
  }
}
