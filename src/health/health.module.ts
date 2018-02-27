import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

// services
import { SharedModule } from './shared/shared.module';

// guards
import { AuthGuard } from '../auth/shared/guards/auth.guard';

const ROUTES: Routes = [
  { path: 'schedule', canActivate: [AuthGuard], loadChildren: './schedule/schedule.module.ts#ScheduleModule' },
  { path: 'meals', canActivate: [AuthGuard], loadChildren: './meals/meals.module.ts#MealsModule' },
  { path: 'workouts', canActivate: [AuthGuard], loadChildren: './workouts/workouts.module.ts#WorkoutsModule' }
]

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ]
})
export class HealthModule {}