Feature: Login y logout con el usuario dado de alta.
    Background:
        Given Usuario se encuentra en la página principal        

    Scenario: US02|TS01|TC01 Usuario se loguea en la website exitosamente
        Given el usuario NO esta logueado en la website
        When el usuario hace click sobre el botón de Log In 
        And  ingresa su “<username>“  and “<password>“ en el formulario
        And hace click sobre el botón Log In que se encuentra dentro del formulario
        Then aparece la palabra Welcome “<username>” en la barra de navegación
    Examples:
        | username | password | 
        | prueba950  | prueba  | 

    Scenario: US02|TS01|TC02 Usuario se desloguea exitosamente
        Given el usuario esta logueado en la website
        When hace click sobre el botón de Log out 
        Then desaparece Welcome “<Username>” de la barra de navegación
        And aparece la palabra Log In en la barra de navegación