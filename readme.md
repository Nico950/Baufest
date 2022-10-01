[![TEST](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/f9y7eu/cypex&style=for-the-badge&logo=cypress)](https://dashboard.cypress.io/projects/8enutb/runs)

# Comandos:

Para abrir pruebas en Cypress: `npx cypress open` o `npm test` 

Para correr pruebas en la terminal: `npx cypress run` o `npm run file` 

# Reporte de pruebas en:
*/**/reports/cucumber-htmlreport.html/index.html 

![image](https://user-images.githubusercontent.com/113467174/193431513-4113e259-b162-4663-8215-591a62082fb3.png)



# WEB (demoblaze.com)

Link: (https://www.demoblaze.com/index.html)

1. Se crearon 3 US para probar las funcionalidades del SUT 'demoblaze'

2. Se crearon 4 TC Happypath y todas pasaron exitosamente. 

3. Se creo un command para el login en "cypress\support\commands.js" 

4. Las US(01, 02, 03) se encuentran en "cypress\e2e\cucumber-test\Suites"

## US01 | demoblaze | Dar de alta un usuario.
US01|TS01|TC01 Usuario se registra en la web exitosamente
## US02 | demoblaze | Login y logout con el usuario dado de alta.
US02|TS01|TC01 Usuario se loguea en la web exitosamente
US02|TS01|TC02 Usuario se desloguea exitosamente
## US03 | demoblaze | Agregar producto al carrito de compras.
 US03|TS01|TC01 Agregar una laptop al carrito.


# WEB SERVICES (petstore)

1. Se creo una US para probar POST, GET y PUT

2. Se crearon assertions para verificar

3. Todas las pruebas pasaron exitosamente

4. La US04 se encuentra en "cypress\e2e\test\Suites\API-Agregar, leer y modificar información de mascota"

## US04 | petstore |  Crear, obtener y modificar mascota 

US04|TS01|TC01 Agregar información de mascota
US04|TS01|TC02 Leer información de mascota
US04|TS01|TC03 Modificar información de mascota
=======

