import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AreaService } from '../../../services/area.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-area-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './area-form.component.html',
  styleUrl: './area-form.component.scss'
})
export class AreaFormComponent {
  areaService = inject(AreaService);
  router=inject(Router);
  route=inject(ActivatedRoute);

  name:string = '';
  isEdit:boolean = false;
  id:string = '';

  ngOnInit(): void {
    this.getsingleAreaById();
  }

  add(){
    this.areaService.addArea(this.name).subscribe((result: any)=>{
      alert("Area added successfully");
      this.router.navigateByUrl("/admin/areas");
    });
  }

  getsingleAreaById() {
    this.id=this.route.snapshot.params["id"];
    if (this.id) {
      this.isEdit = true;
      this.areaService.getAreaById(this.id).subscribe((result: any)=>{
        this.name = result.name;
      })
    }
  }

  update(){
    this.areaService.updateArea(this.id, this.name).subscribe((result: any)=>{
      alert("Area updated successfully");
      this.router.navigateByUrl("/admin/areas");
    });
  }
}
