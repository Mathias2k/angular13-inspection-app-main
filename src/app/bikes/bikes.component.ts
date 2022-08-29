import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BikesApiService } from 'src/app/bikes-api.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikesList$!:Observable<any[]>;

  constructor(private service:BikesApiService) { }

  ngOnInit(): void {
    this.bikesList$ = this.service.getBikeList();
  }

    // Variables (properties)
    modalTitle:string = '';
    activateAddEditBikesComponent:boolean = false;
    bike:any;

    modalAdd() {
      this.bike = {
        id:0,
        valor:null,
        marca:null,
        modelo:null,
        garantia:null,
        seguro:null,
        comentarios:null
      }
      this.modalTitle = "Adicionar Bike";
      this.activateAddEditBikesComponent = true;
    }

    modalEdit(item:any) {
      this.bike = item;
      this.modalTitle = "Editar Bike";
      this.activateAddEditBikesComponent = true;
    }

    delete(item:any) {
      if(confirm(`Tem certeza que quer apagar o item de código: ${item.id}?`)) {
        this.service.deleteBike(item.id).subscribe(res => {
          var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn) {
          closeModalBtn.click();
        }

        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function() {
          if(showDeleteSuccess) {
            showDeleteSuccess.style.display = "none"
          }
        }, 5000);
        this.bikesList$ = this.service.getBikeList();
        })
      }
    }

    modalClose() {
      this.activateAddEditBikesComponent = false;
      this.bikesList$ = this.service.getBikeList();
    }
}
