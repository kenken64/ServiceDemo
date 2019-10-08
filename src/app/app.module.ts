import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './components/a.component';
import { BComponent } from './components/b.component';

import { AService } from './services/a.service';
import { BService } from './services/b.service';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AService , BService],
  bootstrap: [AppComponent]
})
export class AppModule { }
