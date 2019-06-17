- Instalar node e npm
	nodejs.org

- Instalar dependencias globais via npm
	npm install grunt
	npm install grunt-cli
	npm install sass
	
- Instalar dependencias locais via npm
	npm install

- Gerar modernizr na pasta js
	modernizr -c modernizr-config.json -d js/ -u

- Compilação inicial do projeto
	grunt build
		- Copiar arquivos da node_modules
			- grunt copy
		- Compila o scss
			- grunt sass
		- Inicia o monitoramento de alterações nos arquivos .css e .scss
			- grunt watch

- Iniciar servidor
	npm run server
	
- Compilar o scss
	grunt css

- Iniciar o watch
	grunt watch

