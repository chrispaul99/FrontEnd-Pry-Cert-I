import { HttpHeaders } from '@angular/common/http';
export const environment = {
  httpOptions: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  },
  url:"http://miveci20-001-site1.ctempurl.com/api",
  //url:"https://localhost:44375/api",
  production: true,
  mapboxkey : 'pk.eyJ1IjoiY2hyaXNlZG03IiwiYSI6ImNrZWRldWhobDA5bWoydWxnYXlteTd3bWYifQ.hOrG0QMgn1IUYdhb2hWvwg'
};
