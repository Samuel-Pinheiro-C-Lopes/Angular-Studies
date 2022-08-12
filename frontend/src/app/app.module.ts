import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { EventBindingComponent } from './first-section/event-binding/event-binding.component';
import { DataBindingComponent } from './first-section/data-binding/data-binding.component';
import { DirectivesComponent } from './first-section/directives/directives.component';
import { ForDirectiveComponent } from './first-section/for-directive/for-directive.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { ServersComponent } from './first-section/for-directive/servers/servers.component';
import { AssignmentComponent } from './first-section/assignment/assignment.component';
import { SecondSectionComponent } from './second-section/second-section.component'
import { SecondSectionBindingComponent } from './second-section/Binding/binding.component';
import { ServersCreationComponent } from './second-section/Binding/servers-creation/servers-creation.component';
import { CockpitComponent } from './second-section/Binding/servers-creation/cockpit/cockpit.component';
import { ServerElementComponent } from './second-section/Binding/servers-creation/server-element/server-element.component';
import { CharGenerationComponent } from './second-section/Binding/char-generation/char-generation.component';
import { CharDataComponent } from './second-section/Binding/char-generation/char-data/char-data.component';
import { CharComponentComponent } from './second-section/Binding/char-generation/char-component/char-component.component';


@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    DataBindingComponent,
    DirectivesComponent,
    ForDirectiveComponent,
    FirstSectionComponent,
    ServersComponent,
    AssignmentComponent,
    SecondSectionComponent,
    SecondSectionBindingComponent,
    ServersCreationComponent,
    CockpitComponent,
    ServerElementComponent,
    CharGenerationComponent,
    CharDataComponent,
    CharComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
