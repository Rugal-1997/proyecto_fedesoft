import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

	formulario:any;

  constructor(private usersService:UsuariosService, private router:Router) {
  	this.formulario={
  	  auth:{
  	  	email: "",
  	  	password: ""
  	  }
  	}
  }

  ngOnInit() {
  }

  iniciar_Sesion(){
	this.usersService.iniciarSesion(this.formulario).subscribe(respuesta=>{
	  localStorage.setItem('sessionToken',respuesta.jwt);
	  this.router.navigate(['/articulos']);
	  alert('Inicio de Sesion exitoso');
	},error=>{
	  alert('Fallo el inicio de Sesion, Verifica la Consola');
    });
  }

}
