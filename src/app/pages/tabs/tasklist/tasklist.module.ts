import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasklistPageRoutingModule } from './tasklist-routing.module';

import { TasklistPage } from './tasklist.page';
import { TaskListComponentComponent } from 'src/app/components/task-list-component/task-list-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasklistPageRoutingModule
  ],
  declarations: [TasklistPage, TaskListComponentComponent]
})
export class TasklistPageModule {}
