// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URL: 'http://localhost:3000',
   firebaseConfig:  {
     apiKey: 'AIzaSyAZguLmtxMBLgJmMd3hCIkzm_EBEtlWhqk',
     authDomain: 'net-mind.firebaseapp.com',
     databaseURL: 'https://net-mind.firebaseio.com',
     projectId: 'net-mind',
     storageBucket: 'net-mind.appspot.com',
     messagingSenderId: '716239065508',
     appId: '1:716239065508:web:b73b980b971b25200f7131',
     measurementId: 'G-LEL76JP5PS'
    }
  // firebaseConfig: {
  //   apiKey: "AIzaSyBDxqgyGSr-woACNqvUkfmHYShMyTi4ETk",
  //   authDomain: "prueba-9ed76.firebaseapp.com",
  //   databaseURL: "https://prueba-9ed76.firebaseio.com",
  //   projectId: "prueba-9ed76",
  //   storageBucket: "prueba-9ed76.appspot.com",
  //   messagingSenderId: "280084137699",
  //   appId: "1:280084137699:web:fd41924e19a18cf47a67d6"
  // }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.