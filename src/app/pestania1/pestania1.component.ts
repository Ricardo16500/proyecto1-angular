import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pestania1',
  templateUrl: './pestania1.component.html',
  styleUrls: ['./pestania1.component.css']
})
export class Pestania1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  title: String = "TECNOLOGIAS WEB";
  titleucb: String = "UNIVERSIDAD CATÓLICA BOLIVIANA";
  contucb: String = "Como una de las mejores universidades del país, la U.C.B. "+
      "impulsa el progreso de la sociedad boliviana formando el talento humano de los " +
      " profesionales en distintas ramas del conocimiento, para resolver los problemas emergentes "+
      "del contexto social y aportar con soluciones desde la perspectiva académica.";

  titleweb: String = "TECNOLOGIAS WEB INTRODUCCION";
  contweb: String = "Permite la creación de sitios dinámicos en Internet. Esto se consigue generando los contenidos del sitio a través de una base de datos mediante lenguajes de programación Web. Dominando la programación Web podremos crear sitios dinámicos como periódicos digitales o tiendas virtuales.";

  titleframework: String = "INTRODUCCION FRAMEWORK ";
  contframework: String = "En pocas palabras, un Framework es una estructura previa que se puede aprovechar para desarrollar un proyecto. "+
  "El Framework es una especie de plantilla, un esquema conceptual, que simplifica la elaboración de una tarea, ya que solo es necesario complementarlo de acuerdo a lo que se quiere realizar." +
  " A pesar de que su uso más común es en la informática, este concepto es también utilizado en el Marketing. "+
  "En ambas áreas facilita mucho el trabajo, ya sea del desarrollo de un software o de una estrategia de mercadotecnia.";
}
