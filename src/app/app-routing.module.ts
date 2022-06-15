import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'training-page',
    loadChildren: () => import('./training-page/training-page.module').then( m => m.TrainingPagePageModule)
  },
  {
    path: 'training-days',
    loadChildren: () => import('./training-days/training-days.module').then( m => m.TrainingDaysPageModule)
  },
  {
    path: 'training-cardio',
    loadChildren: () => import('./training-cardio/training-cardio.module').then( m => m.TrainingCardioPageModule)
  },
  {
    path: 'training-fitness',
    loadChildren: () => import('./training-fitness/training-fitness.module').then( m => m.TrainingFitnessPageModule)
  },
  {
    path: 'training-weeks',
    loadChildren: () => import('./training-weeks/training-weeks.module').then( m => m.TrainingWeeksPageModule)
  },
  {
    path: 'training-pause',
    loadChildren: () => import('./training-pause/training-pause.module').then( m => m.TrainingPausePageModule)
  },
  {
    path: 'training-exercise',
    loadChildren: () => import('./training-exercise/training-exercise.module').then( m => m.TrainingExercisePageModule)
  },
  {
    path: 'training-end',
    loadChildren: () => import('./training-end/training-end.module').then( m => m.TrainingEndPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
