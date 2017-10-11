import { NgModule } from '@angular/core';
import { TopMenuComponent } from './top-menu/top-menu';
import { TopNavComponent } from './top-nav/top-nav';
@NgModule({
	declarations: [TopMenuComponent,
    TopNavComponent],
	imports: [],
	exports: [TopMenuComponent,
    TopNavComponent]
})
export class ComponentsModule {}
