# Teste Tecnico Fullstack


# Objetivo do projeto
  Criar um cadastro de clientes que poderá conter muitos contatos associados.Depois deste processo deverá ter um relatório em tela, ou PDF que mostre os clientes e os contatos vinculados a este cliente.
Um cliente poderá ter mais de um contato vinculado a ele;


# ROTAS NÃO AUTENTICADAS

## CADASTRO DE USUARIO

Rota para a criação de usuario.

POST /users

### Exemplo de requisição:

	{
		"name":"Adriano Nóbrega",
		"email":"adrianonobrega26@gmail.com",
		"password":"1234",
		"phone":"83 998458056"
	}

### Exemplo de resposta:
201:Created

	{
		"name": "Adriano Nóbrega",
		"email": "adrianonobregsa26@gmail.com",
		"phone": "83 996408016"
	}
#####passar e-mail que ja existe.
400:Bad Request

	{
		"message": "Email already exists"
	}


## LOGIN DE USUARIO

Rota para fazer o login do usuario.

POST /users/login

### Exemplo de requisição:

	{
		"email":"adrianonobrega26@gmail.com",
		"password":"1234"
	}

### Exemplo de resposta:
200:OK
		{
			"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkcmlhbm9ub2JyZWdhMjasdsdsdasdsaddsFsdsSFDFF"
		}
passar e-mail ou senha incorretos.
400:Bad Request

	{
		"message": "Wrong email/password"
	}

# ROTAS AUTENTICADAS
