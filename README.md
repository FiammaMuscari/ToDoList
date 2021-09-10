# Lista de Tareas
Para ver el proyecto haz click [aquí](https://listadetareas-woad.vercel.app)
* Hecha con React 
* Desplegada en Vercel


## Pasos a tener en cuenta si queremos crear un React App
Para utilizar el codigo deberás tener instalado [Node.JS](https://nodejs.org/en/)
Para instalar el proyecto de base, ejecute el siguiente comando en la terminal:
```
npx create-react-app to-do-list .
```
El punto al final es necesario para crear la app en el directorio, al terminar de esperar se nos crearan:

```

to-do-list
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

luego en la terminal pondremos lo siguiente para que se nos abra el host:
```
npm start
```
En nuestro caso eliminaremos todas las carpetas del src menos las siguientes y agregamos una carpeta llamada componentes
```
└── src ── components
    │            ├──todo.js
    │            ├──todoForm.js
    │            └──todoList.js
    │ 
    ├── App.css
    ├── App.js
    └── index.js
```
Cada componente está modificado segun el script al que corresponde, puedes seguir el paso a paso [Aquí](https://www.youtube.com/watch?v=E1E08i2UJGI)

## Para cambiar el favicon
* Encuentra el icono que más te guste y descargalo, te recomiendo las páginas [Flaticon](https://www.flaticon.es) e [icon-icons](https://icon-icons.com/es/)
* Dentro de la carpeta public eliminamos el favicon.ico y arrastramos la nueva imagen ahí, nos aseguramos que tenga el mismo nombre, el cual tiene que coincidir con el manifest.json, al refrescar nuestro localhost veriamos el cambio.
```
├── public
│   ├── favicon.ico  <--eliminar y reemplazar
│   ├── index.html
│   └── manifest.json <-- "icons" {"src"= "favicon.ico"} 
```

## Para cambiar el título
* Visitamos la siguiente página [Aquí](https://www.npmjs.com/package/react-helmet)
* En la Terminal instalamos lo siguiente:
```
npm install --save react-helmet
```
* Dentro del archivo App.js en la fuction App() agregamos el Helmet mas el meta description y modificamos el <tittle></title>
  
```
function App() {
  return (
    <div className='todo-app'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TU TÍTULO AQUÍ</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Icon and title" />
      </Helmet>
      <TodoList /> ->esto es de otro script
      
    </div>
  );
}
```

Espero que te sirva para realizar tus sitios con React Hooks y personalizarlos, suerte!🚀🚀🚀
            

# To Do List
To see the project click [here](https://listadetareas-woad.vercel.app)
* Created using React
* Deployed in Vercel




## Steps to take if we want to create a React App
To use the code you must have installed [Node.JS](https://nodejs.org/en/)
To install the base project, run the following command in terminal:
```
npx create-react-app to-do-list .
```
The point at the end is necessary to create it in the directory, it will create:

```

to-do-list
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

then in the terminal we will put the following to open the localhost:
```
npm start
```
In our case we will delete all the src folders except the following and add a folder called components:
```
└── src ── components
    │            ├──todo.js
    │            ├──todoForm.js
    │            └──todoList.js
    │ 
    ├── App.css
    ├── App.js
    └── index.js
```
Each component is modified according to the script to which it corresponds, you can follow the step by step [here](https://www.youtube.com/watch?v=E1E08i2UJGI)

## To change the favicon
* Find the icon you like most and download it, I recommend [Flaticon](https://www.flaticon.es) and [icon-icons](https://icon-icons.com/es/)
* Inside public folder we delete favicon.ico and drag a new image there, we make sure it has the same name, which has to match the manifest.json, when we refresh our localhost we would see the change.
```
├── public
│   ├── favicon.ico  <--eliminar y reemplazar
│   ├── index.html
│   └── manifest.json <-- "icons" {"src"= "favicon.ico"} 
```

## To change title
* We visit the following page [Here](https://www.npmjs.com/package/react-helmet)
* And we install the netx thing on the terminal:
```
npm install --save react-helmet
```
* Inside the App.js file in the fuction App() we add the Helmet plus the meta description and modify the <tittle> </title>
  
```
function App() {
  return (
    <div className='todo-app'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TU TÍTULO AQUÍ</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Icon and title" />
      </Helmet>
      <TodoList /> ->esto es de otro script
      
    </div>
  );
}
```

I hope it helps you to make your sites with React Hooks and customize them, good luck!🚀🚀🚀
