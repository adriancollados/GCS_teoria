import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarPage } from './calendar.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarPage
  }, 
  {
    path: 'calendar/:day',
    loadChildren: () => import('../calendar-day/calendar-day.component').then(m => m.CalendarDayComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarPageRoutingModule {}
