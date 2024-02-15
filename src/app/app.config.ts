import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    {
      provide: "SocialAuthServiceConfig",
       useValue: {
         autoLogin: false,
         providers: [
           {
             id: GoogleLoginProvider.PROVIDER_ID,
             provider: new GoogleLoginProvider(environment.GOOGLE_KEY, {
               oneTapEnabled: false,
             }),
           },
         ],
         onError: (err) => {
           console.error(err);
         },
       } as SocialAuthServiceConfig
}
]
};
