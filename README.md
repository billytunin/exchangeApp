# exchangeApp

### Ejecución
Si es la primera vez que levantamos el sitio, debemos instalar las dependencias primero:

```npm install```

Luego, basta con ejecutar un
```npm start```

para iniciar iniciar un servidor local (provisto por weback) que servirá el contenido de nuestra app en localhost:3000 con livereload. Es decir, cada vez que hagamos un cambio en alguno de los archivos del proyecto, este recompilará automaticamente.
Este comando también se encarga de compilar los archivos SASS a CSS y despierta un watch que estará constantemente observando la carpeta de estilos. En cuanto haya un cambio, recompilará lo necesario de SASS a CSS.

### BTC
A modo didactico y por fines de practicidad, la cantidad inicial de BTC del usuario se asigna por código a mano.
El estado de este balance es manejado por el componente principal llamado "App.jsx" (en "src/App.jsx"), y por lo tanto se puede modificar por código en aquel componente. Luego, exchangeApp traduce esos bitcoins a pesos Argentinos en tiempo real utilizando la API de [coindesk](https://www.coindesk.com/api/).
En un caso de uso real, este componente utilizaría algun endpoint para obtener el balance actual del usuario desde una base de datos.

### Tests
Los tests se ejecutan utilizando Jest .
Con el comando ```npm test``` ejecutaremos todos los tests suites y se activará un watcher que observara los archivos .test .
Algunos tests usan la funcionalidad de snapshots de react-test-renderer . Por lo cual, si se necesitara actualizar los snapshots (porque se cambia el layout de algun componente, por ejemplo) solo basta con ejecutar ```jest --updateSnapshot``` .

### Aclaraciones

- Si se requiere soportar velocidades de conexion mas lentas (para la versión mobile, por ejemplo) se podría usar una foto de background mas liviana

- El formato numerico está sujeto al formato de USA. Ademas el numero en ARS está limitado hasta 2 decimales despues de la coma, y en BTC a 7 decimales despues de la coma.

- Si se requiere soportar multiples idiomas, debería existir un "diccionario" en el front-end donde se defina un objeto de key-values con arrays que indicarán los textos para cada idioma