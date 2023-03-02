import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path: 'posts',
    component: PostsPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
