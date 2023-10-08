import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NbAuthJWTToken, NbAuthModule, NbOAuth2AuthStrategy, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NgxLoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'data.accessToken', // this parameter tells where to look for the token
          },
          // redirect: {
          //   success: '/', // welcome page path
          //   failure: null, // stay on the same page
          // },
        }),
      ],
      forms: {},
    }),
  ],
  declarations: [
    NgxLoginComponent,
  ],
})
export class NgxAuthModule {
}
