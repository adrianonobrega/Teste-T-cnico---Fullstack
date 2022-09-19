# Teste Tecnico Fullstack


# Objetivo do projeto
  Criar um cadastro de clientes que poderá conter muitos contatos associados.Depois deste processo deverá ter um relatório em tela, ou PDF que mostre os clientes e os contatos vinculados a este cliente.
Um cliente poderá ter mais de um contato vinculado a ele;


# ROTAS NÃO AUTENTICADAS

## CADASTRO DE USUARIO

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

## LISTAR TODOS OS USUARIOS

GET /users

### Exemplo de resposta:
200:OK

		[
			{
				"id": "77f11266-9813-4ce2-ba98-efec7815766c",
				"name": "Adriano Nóbrega",
				"email": "adrianonosbregsa26@gmail.com",
				"phone": "83 996408016",
				"created_at": "2022-09-19T20:39:23.148Z",
				"updated_at": "2022-09-19T20:39:23.148Z"
			},
			{
				"id": "746acb8b-6d13-4eb7-9e0c-233d134fa698",
				"name": "Adriano Nóbrega",
				"email": "adrianonobrega26@gmail.com",
				"phone": "83 996408016",
				"created_at": "2022-09-19T20:39:38.760Z",
				"updated_at": "2022-09-19T20:39:38.760Z"
			}
		]

## LISTAR USUARIO ESPECIFICO.

GET /users/:id <br>
OBS: id do usuario cadastrado.

200:OK

	{
		"id": "77f11266-9813-4ce2-ba98-efec7815766c",
		"name": "Adriano Nóbrega",
		"email": "adrianonosbregsa26@gmail.com",
		"password": "$2b$10$r328ZLIFkkMs/7uevG9HluDYv4d.yjZhJWfWFaBtx3ZEs88Rp7Z5K",
		"phone": "83 996408016",
		"created_at": "2022-09-19T20:39:23.148Z",
		"updated_at": "2022-09-19T20:39:23.148Z"
	}

