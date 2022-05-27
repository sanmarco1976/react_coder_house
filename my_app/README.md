# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
# Felixa
## Este Proyecto Es Un Ecommerce


Para incializar el proyecto debemos seguir una serie de pasos:

- Clonarlo
- Ejecutar: nmp start
- ✨Se va a estar visualizando en localhost:3000✨

## Rutas
Nuestra aplicacion posee una serie de rutas:
 >En primer lugar tenemos el NavBar:
- Este Posee el logo, el cual linkea al inicio
- Ademas 'Todos Los Productos', por ahora estariaa linkeando el inico
- Por otro lado tenemos 'All-Day', el cual te lleva hacia la categoria Day
- Por ultimo tenemos 'All-Nigth', el cual te lleva hacia la categoria Nigth

>En segundo lugar tenemos '/detail/:idProducto':
- Renderiza a ItemDetailContainer,
- linkea al detalle de cada producto, en este podemos ver la imagen junto al nombre al precio, dos botones que aumentan el contador del producto hasta el stock disponible y un ultimo boton 'Agregar Al Carrito'

>En tercer lugar tenemos '/categoria/:categoria':
- Renderiza a ItemListContainer,
- El cual linkea a la cada categoria ('Day / Nigth'), y muestra los productos que pertenecen a  cada categoria

## Componentes

- ItemListContainer: recibe todos los productos como parametro y realiza un listado de productos, a partir de la categoria
- ItemList: es la lista de productos
- ItemDetailContainer: este componente una vez que tocamos para ver el detalle te lleva a ItemDetail
- ItemDetail: a partir del Id, muestra el item detallado, con su imagen, nombre, precio, y contador de stock
- ItemCount: este es un contador de Stock, aparece en ItemDetail, y nos deja sumar productos hasta el stock y nos deja restar hasta cero
- Item: vendria a ser cada producto del ItemListContainer
- CardWidget: este componente por ahora solo coloca la imagen del carrito y le mustra un numero

### Para finalizar nuestra app

- Debemos apretar ctrl + C, para parar la ejcucion 