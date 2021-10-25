import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pestania2',
  templateUrl: './pestania2.component.html',
  styleUrls: ['./pestania2.component.css']
})
export class Pestania2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title: String = "LOS 10 FRAMEWORKS MÁS POPULARES EN 2021";
  frameone: String = "1) REACT JS";
  contone: String = "React core es solo una biblioteca sin comentarios que implementa la capa de vista para la interfaz de usuario. En el desarrollo de aplicaciones, se utiliza con otras bibliotecas de React Ecosystem para el desarrollo de aplicaciones de un extremo a otro.";

  frametwo: String = "2) VUE JS";
  conttwo: String = "Vue.js ofrece una funcionalidad de desarrollo de aplicaciones de extremo a extremo similar a Angular y una capa de vista similar a React con flujo de datos externos y administración de estado. ";

  frametree: String = "3) ANGULAR";
  conttree: String = "Angular es un framework de “baterías incluidas” que ofrece una experiencia de desarrollo de aplicaciones de un extremo a otro. Angular CLI es una de las mejores CLI en desarrollo web y ayuda a crear un nuevo proyecto Angular.";

  framefour: String = "4) SPRING";
  contfour: String = "Aunque Java y Spring no se están promocionando, siguen siendo la opción número uno en el desarrollo de software empresarial. Como resultado, Spring sigue siendo uno de los frameworks web mejor clasificados durante la era de React, Vue.js, Django.";

  framefive: String = "5) DJANGO";
  contfive: String = "Es un framework web MTV (Model-Template-View) de nivel empresarial, renderizado en el lado del servidor, con soporte adicional para programación reactiva asíncrona. Con Django Admin, ofrece desarrollo rápido de aplicaciones.";

  framesix: String = "6) RUBY ON RAILS";
  contsix: String = "Es un framework web MTV (Model-Template-View) de nivel empresarial, renderizado en el lado del servidor, con soporte adicional para programación reactiva asíncrona. Con Django Admin, ofrece desarrollo rápido de aplicaciones.";

  frameseven: String = "7) ASP.NET CORE";
  contseven: String = "Tiene un diseño modular, y muchas otras bibliotecas .NET y la mayoría de las bibliotecas populares del lado del cliente de JavaScript (React, Angular, Vue.js, Ember.js) funcionan a la perfección con ASP.NET Core.";

  frameeight: String = "8) FLASK";
  conteight: String = "Es uno de los frameworks web renderizados del lado del servidor minimalistas más populares. En el panorama de Python, es el segundo marco web más popular: justo detrás de Django.";

  framenine: String = "9) EXPRESS JS";
  contnine: String = "En la última década, Node.js ha experimentado un aumento meteórico en el desarrollo del lado del servidor. Como marco del lado del servidor predeterminado en Node.js, Express.js también gozó de una enorme popularidad.";

  frameten: String = "10) LARAVEL";
  contten: String = "PHP es uno de los lenguajes de programación más populares para el desarrollo web, mientras que Laravel ofrece un marco de nivel empresarial con alta velocidad de desarrollo. Como resultado, Laravel disfruta de una gran popularidad en la comunidad. ";
}
