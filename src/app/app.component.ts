import { Component } from '@angular/core';
import { AservService } from './a/a.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ModuleSettings';

  constructor( myService: AservService ) {

		console.group( "AppComponent Constructor" );
		console.log( "myService injectable" );
		console.log( myService );
		console.groupEnd();

	}

}
