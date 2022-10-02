import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'first-remote',
          loadChildren: () =>
            import('first-remote/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'second-remote',
          loadChildren: () =>
            import('second-remote/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '',
          loadChildren: () => import('@swiper-with-mf/pages/feature/home').then((m) => m.PagesFeatureHomeModule),
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
