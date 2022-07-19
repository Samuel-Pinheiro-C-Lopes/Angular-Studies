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
import { Servers_Creation_Component } from './second-section/Binding/Servers_Creation_Component/servers_creation.component';
import { CockpitComponent } from './second-section/Binding/Servers_Creation_Component/cockpit/cockpit.component';
import { ServerElementComponent } from './second-section/Binding/Servers_Creation_Component/server-element/server-element.component';


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
    Servers_Creation_Component,
    CockpitComponent,
    ServerElementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
