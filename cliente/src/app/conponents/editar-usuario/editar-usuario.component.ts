import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../servicio/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: '../nuevo-usuario/nuevo-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  paisesLocales:any [];
  forma:FormGroup;

  constructor(
                private userService:UsuariosService,
                private router:ActivatedRoute,
                private fb:FormBuilder
                
            ) {

      /******************************************************
            Obtenemos todos los paises de la BD
      ******************************************************/
     this.router.params.subscribe(parametro =>{
       console.log('Ruta Padre ID del usuario');
       console.log(parametro.id);
     })


    }

  ngOnInit(): void {
      /******************************************************
            Obtenemos todos los paises de la BD
      ******************************************************/
       this.userService.getPaises().subscribe( pais =>{
        this.paisesLocales = pais['paises'];
        console.log(pais['paises']);
      },error =>{
        console.log(error)
      });

      /******************************************************
            Obtenemos todos los paises de la BD
      ******************************************************/
       this.userService.getPaises().subscribe( pais =>{
        this.paisesLocales = pais['paises'];
        console.log(pais['paises']);
      },error =>{
        console.log(error)
      });

      /******************************************************
            Inicializamos el formulario
      ******************************************************/
      this.crearFormulario();

  }



  /******************************************************************************
   ******************    Validaciones      **************************************
  ******************************************************************************/
  get tipoIDNoValid(){
    return this.forma.get('tipoId').invalid && this.forma.get('tipoId').touched;
  }
  get tipoIDValid(){
    return this.forma.get('tipoId').valid && this.forma.get('tipoId').touched;
  }

  get nombreNoValid(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get nombreValid(){
    return this.forma.get('nombre').valid && this.forma.get('nombre').touched;
  }

  get emailNoValid(){
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }
  get emailValid(){
    return this.forma.get('email').valid && this.forma.get('email').touched;
  }

  get paisNoValid(){
    return this.forma.get('pais').invalid && this.forma.get('pais').touched;
  }
  get paisValid(){
    return this.forma.get('pais').valid && this.forma.get('pais').touched;
  }

  get barrioNoValid(){
    return this.forma.get('barrio').invalid && this.forma.get('barrio').touched;
  }
  get barrioValid(){
    return this.forma.get('barrio').valid && this.forma.get('barrio').touched;
  }

  get numeroIdNoValid(){
    return this.forma.get('numeroId').invalid && this.forma.get('numeroId').touched;
  }
  get numeroIdValid(){
    return this.forma.get('numeroId').valid && this.forma.get('numeroId').touched;
  }

  get apellidoNoValid(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }
  get apellidoValid(){
    return this.forma.get('apellido').valid && this.forma.get('apellido').touched;
  }


  get numContactoNoValid(){
    return this.forma.get('numCel').invalid && this.forma.get('numCel').touched;
  }
  get numContactoValid(){
    return this.forma.get('numCel').valid && this.forma.get('numCel').touched;
  }

  get ciudadNoValid(){
    return this.forma.get('ciudad').invalid && this.forma.get('ciudad').touched;
  }
  get ciudadValid(){
    return this.forma.get('ciudad').valid && this.forma.get('ciudad').touched;
  }


  crearFormulario(){

  }
  guardar(){

  }
  

}
