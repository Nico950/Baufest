Feature: US03 | demoblaze | Agregar producto al carrito de compras.
    Background:

        Given Usuario se encuentra en la página principal

    Scenario: US03|TS01|TC01 Agregar una laptop al carrito.
        When el usuario hace click sobre un producto Laptop
        And es dirigido al PDP del producto
        And hace click en Add to cart
        Then aparece un mensaje de confirmación Product added