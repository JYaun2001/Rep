import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DatoshistComponent} from './datoshist/datoshist.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DatoshistComponent,
    // Otros componentes
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
