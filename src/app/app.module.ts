import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { TerceroComponent } from './tercero/tercero.component';
import { CuartoComponent } from './components/cuarto/cuarto.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RotateDirective } from './directives/rotate.directive';
import { UsersComponent } from './components/users/users.component';
import { MinAgePipe } from './pipes/min-age.pipe';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CrudBasicoComponent } from './components/crud-basico/crud-basico.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    HighlightDirective,
    RotateDirective,
    UsersComponent,
    MinAgePipe,
    GaleriaComponent,
    CrudBasicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
