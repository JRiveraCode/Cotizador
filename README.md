# Cotizador de Criptomonedas

Este proyecto es una aplicación web sencilla para cotizar el valor de criptomonedas en tiempo real.

## Características
- Consulta de precios de criptomonedas populares.
- Interfaz moderna y responsiva.
- Visualización de gráficos e iconos relacionados.

## Instalación
1. Clona este repositorio:
   ```
   git clone https://github.com/JRiveraCode/Cotizador.git
   ```
2. Abre la carpeta en tu editor favorito (por ejemplo, VS Code).
3. No requiere instalación de dependencias, solo abre `index.html` en tu navegador.

## Uso
1. Abre el archivo `index.html` en tu navegador web.
2. Selecciona la criptomoneda y la moneda de cotización.
3. Visualiza el resultado actualizado.

## Detalles del funcionamiento
La aplicación Cotizador funciona de la siguiente manera:
- Al cargar la página, se obtiene una lista de criptomonedas populares mediante una API pública.
- El usuario selecciona una criptomoneda y una moneda local (por ejemplo, USD o MXN).
- Al hacer clic en "Cotizar", la aplicación realiza una consulta a la API y muestra el precio actualizado en pantalla.
- Se utilizan gráficos SVG para mejorar la experiencia visual.
- Todo el proceso se realiza en el navegador, sin necesidad de backend.

## Fuente de datos (API)
Este cotizador utiliza la API pública de [CoinDesk](https://developers.coindesk.com/) para obtener los precios y datos de criptomonedas en tiempo real.
- Documentación oficial: [https://developers.coindesk.com/](https://developers.coindesk.com/)

## Autor
- Iconos y gráficos: [undraw.co](https://undraw.co/)
- Desarrollado por JRiveraCode

<!-- ## Licencia
Este proyecto está bajo la licencia MIT. -->
