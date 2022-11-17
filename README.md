Rodando o projeto

	#<b> Clone este repositório<b/>

	# Acesse a pasta do projeto

	# Instale as dependências
	$ yarn install

	# Rode as migrações
	$ yarn typeorm migration:run -d src/database

	# Execute a aplicação em mode de desenvolvimento
	$ yarn dev

	# O servidor iniciará na porta:9000 - acesse <http://localhost:9000>
