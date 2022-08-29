import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { BikesApiService } from 'src/app/bikes-api.service';

@Component({
  selector: 'app-add-edit-bike',
  templateUrl: './add-edit-bike.component.html',
  styleUrls: ['./add-edit-bike.component.css']
})
export class AddEditBikeComponent implements OnInit {

  submitted = false;

  onSubmit() { this.submitted = true; }

  showFormControls(form: any) {
    return form &&
    form.controls.valor && form.controls.marca.valor &&
    form.controls.marca && form.controls.marca.value &&
    form.controls.modelo && form.controls.modelo.value &&
    form.controls.seguro && form.controls.seguro.value &&
    form.controls.garantia && form.controls.garantia.value;
  }

  seguroOption : string = '';
  garantiaOption : string = '';
  bikesList$!: Observable<any[]>;

  constructor(private service:BikesApiService) {}

  seguroOptions = [
    { name: "Sim", value: "true" },
    { name: "Não", value: "false" }
  ]

  garantiaOptions = [
    { name: "Sim", value: "true" },
    { name: "Não", value: "false" }
  ]

  @Input() bike:any;
   id: number = 0;
   valor: number = 0;
   marca: string = "";
   modelo: string = "";
   garantia: boolean = false;
   seguro: boolean = false;
   comentarios: string = "";

  ngOnInit(): void {
    this.valor = this.bike.valor;
    this.marca = this.bike.marca;
    this.modelo = this.bike.modelo;
    this.garantia = (this.garantiaOption == "true");
    this.seguro = (this.seguroOption == "true");
    this.comentarios = this.bike.comentarios;
    this.bikesList$ = this.service.getBikeList();
  }

  addBike() {
    var bike = {
      valor:this.valor,
      marca:this.marca,
      modelo:this.modelo,
      garantia:(this.garantiaOption == "true"),
      seguro:(this.seguroOption == "true"),
      comentarios:this.comentarios
    }
    this.service.addBike(bike).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 5000);
    })
  }

  updateBike() {
    var bike = {
      id:this.id,
      valor:this.valor,
      marca:this.marca,
      modelo:this.modelo,
      garantia:(this.garantiaOption == "true"),
      seguro:(this.seguroOption == "true"),
      comentarios:this.comentarios
    }
    var id:number = this.id;
    this.service.updateBike(id,bike).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 5000);
    })
  }

}
