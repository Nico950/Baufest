Feature: US01: Dar de alta un usuario.
    Background:

        Given Usuario se encuentra en la página principal       

    Scenario: US01|TS01|TC01 Usuario se registra en la website exitosamente
        When el usuario hace click sobre el botón de Sign Up para crear cuenta
        And  ingresa su “<username>“ and “<password>“ en el formulario
        And hace click sobre el botón Sign Up que se encuentra dentro del formulario
        Then aparece un mensaje amigable de creación de cuenta “sign up Successfull“
        Examples:
            | username  | password |
            | prueba950 | prueba   |