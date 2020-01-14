import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeHacksDetailsComponent } from './life-hacks-details/life-hacks-details.component';
import { LifeHacksComponent } from './life-hacks/life-hacks.component';
import { LifeHacksFormComponent } from './life-hacks-form/life-hacks-form.component';
import { ShowvotesDirective } from './showvotes.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LifeHacksDetailsComponent,
    LifeHacksComponent,
    LifeHacksFormComponent,
    ShowvotesDirective,
    DateCountPipe
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
