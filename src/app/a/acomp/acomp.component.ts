import { Component, OnInit } from '@angular/core';
import { AservService } from '../aserv/aserv.service';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css']
})
export class AcompComponent implements OnInit {

	constructor( myService: AservService ) {

		console.log( "myService injectable" );
		console.log( myService );

	}

  ngOnInit(): void {
    console.log('naber')
  }

}
