// Las dos primeras lineas de 'import' son obligatorias

// 1) Tener a react en Scope
// import React from 'React';

// 2) Tener a ReactDOM en scope
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// 3) Tener por lo menos un componente > creamos un nuevo js > App.js
import App from './App';

// 4) Primero pasamos un valor A ( en este caso la funcion), y luego un valor B(Obetenemos el elemento del HTML)
ReactDOM.render(<App/>, document.getElementById('root'));