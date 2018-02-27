import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { ScheduleComponent } from './containers/schedule/workouts.component';

const ROUTES: Routes = [
  { path: '', component: ScheduleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ScheduleComponent
  ],
})
export class ScheduleModule {}