# exchangeApp

##Ejecución
Si es la primera vez que levantamos el sitio, debemos instalar las dependencias primero:
```npm install```

Luego, basta con ejecutar un
```npm start```
para iniciar iniciar un servidor local (provisto por weback) que servirá el contenido de nuestra app en localhost:3000 con livereload. Es decir, cada vez que hagamos un cambio en alguno de los archivos del proyecto, este recompilará automaticamente.
Este comando también se encarga de compilar los archivos SASS a CSS y despierta un watch que estará constantemente observando la carpeta de estilos. En cuanto haya un cambio, recompilará lo necesario de SASS a CSS.