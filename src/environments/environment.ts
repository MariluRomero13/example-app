// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endPoint: 'http://127.0.0.1:3333' // esta es la url en donde se encuentra la api que hicimos con adonis

  // Con esta url vamos a consumir los servicios
  // las propiedades que se añadan en el archivo de environment, se pueden mandar llamar en cualquier parte del proyecto
  // importaremos las variables de entorno en los servicios
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.