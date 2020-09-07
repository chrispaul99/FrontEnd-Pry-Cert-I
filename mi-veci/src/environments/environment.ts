// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from '@angular/common/http';

export const environment = {
  httpOptions: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  },
  url:"http://miveci20-001-site1.ctempurl.com/api",
  production: false,
  mapboxkey : 'pk.eyJ1IjoiY2hyaXNlZG03IiwiYSI6ImNrZWRldWhobDA5bWoydWxnYXlteTd3bWYifQ.hOrG0QMgn1IUYdhb2hWvwg'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
