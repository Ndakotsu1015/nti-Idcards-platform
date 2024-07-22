import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NCEComponent } from './nce.component';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: NCEComponent }
	])],
	exports: [RouterModule]
})
export class NceRoutingModule { }
