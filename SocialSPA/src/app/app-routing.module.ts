import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ConnectionsComponent } from './connections/connections.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guard/auth.guard';
import { AppGuideComponent } from './app-guide/app-guide.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'register', component: RegisterComponent },
      { path: 'terms', component: AppGuideComponent }
    ]
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'connections', component: ConnectionsComponent },
      { path: 'messages', component: MessagesComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
