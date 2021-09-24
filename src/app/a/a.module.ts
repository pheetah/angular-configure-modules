import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcompComponent } from './acomp/acomp.component';
import { Aconfig } from './aserv/aserv.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export { Aconfig, AservService } from './aserv/aserv.service';

@NgModule({
  declarations: [
    AcompComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AcompComponent
  ]
})
export class AModule {
  static forRoot( options?: ModuleOptions ) : ModuleWithProviders {

		return({
			ngModule: AModule,
			providers: [
				// In order to translate the raw, optional OPTIONS argument into an 
				// instance of the MyServiceOptions TYPE, we have to first provide it as
				// an injectable so that we can inject it into our FACTORY FUNCTION.
				{
					provide: FOR_ROOT_OPTIONS_TOKEN,
					useValue: options
				},
				// Once we've provided the OPTIONS as an injectable, we can use a FACTORY
				// FUNCTION to then take that raw configuration object and use it to
				// configure an instance of the MyServiceOptions TYPE (which will be
				// implicitly consumed by the MyService constructor).
				{
					provide: Aconfig,
					useFactory: provideMyServiceOptions,
					deps: [ FOR_ROOT_OPTIONS_TOKEN ]
				}

				// NOTE: We don't have to explicitly provide the MyService class here
				// since it will automatically be picked-up using the "providedIn"
				// Injectable() meta-data.
			]
		});

	}

}

export interface ModuleOptions {
  config:string
}

export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ModuleOptions>( "forRoot() MyService configuration." );

export function provideMyServiceOptions( options?: ModuleOptions ) : Aconfig {

	var myServiceOptions = new Aconfig();

	// If the optional options were provided via the .forRoot() static method, then apply
	// them to the MyServiceOptions Type provider.
	if ( options ) {

		if ( typeof( options.config ) === "number" ) {

			myServiceOptions.config = options.config;

		}

	}

	return( myServiceOptions );

}