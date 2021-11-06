import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public respuesta:any = '';
  public users:any = '';
  public nombre:string = 'BY DEFAULT';
  public formUser = {
    nombre: 'NOMBRE',
    edad: '',
    fecha: ''
  }

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.showDB();
    this.getUsers();
  }

  showForm(){
    console.log('nombre', this.nombre)
    console.log('formUser', this.formUser)
  }

  createUser(){
    this.showForm()
    this.apiService.createUser(this.formUser).subscribe(res => {
        console.log(res)
      }
    );
  }

  getUsers(){
    this.apiService.get().subscribe( res =>{
      console.log('res', res);
      this.users = res;
    })
  }

  showDB(){
    this.respuesta = this.apiService.createDb()
  }

}
