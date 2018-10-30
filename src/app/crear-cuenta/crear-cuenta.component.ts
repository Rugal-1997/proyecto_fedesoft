import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { HumedalesService } from '../humedales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

	formulario:any;
  nombreHumedal:Array<string>;

  constructor(private usersService:UsuariosService, private router:Router, private humedal:HumedalesService) {
  	this.nombreHumedal=[];
    this.formulario={
  	  user:{
  	  	name: "",
  	  	email: "",
  	  	password: "",
  	  	password_confirmation: "",
  	  	humedal_id: ""
  	  }
  	}
  }

  ngOnInit() {
  }

  humedalId(){
    this.humedal.traerHumedales().subscribe(respuesta=>{
      
    },error=>{
      alert();
    });
  }

  crear_Cuenta(){
	this.usersService.crearCuenta(this.formulario).subscribe(respuesta=>{
	  let autenticacion = {
		auth:{
	    email:this.formulario.user.email,
		  password:this.formulario.user.password
		}
	  };
	  this.usersService.iniciarSesion(autenticacion).subscribe(respuestaAuth=>{
	    localStorage.setItem('sessionToken',respuestaAuth.jwt);
	    this.router.navigate(['/humedales']);
	    alert('Usuario Creado, Bienvenido');
	  },errorAuth=>{
	    alert('Fallo la autenticacion');
	  });
    },error=>{
	  alert('No se ha podido crear el usuario, Revisa la consola');
    })
  }

}
