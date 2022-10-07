# Teste Tecnico Fullstack


# Objetivo do projeto
  Criar um cadastro de clientes que poderá conter muitos contatos associados.
  
   # RODAR O PROJETO
   	yarn typeorm migration:run -d src/database --> rodar as migrações 
	yarn dev
	
  
  # POSSIVEIS ERROS
  
  ## TOKEN INVALIDO OU SE NÃO PASSAR O TOKEN
  401:Unauthorized
  
  	{
	
	"message": "Invalid Token"
	
	}
	
  ## USUARIO QUE NÃO EXISTE
  
  400:Bad Request
  
  	{
	
		"message": "User not found"
		
	}
	
 ## CONTATO QUE NÃO EXISTE	
 400:Bad Request
 
  	{
	
	"message": "Contact not found"
	
	}
	
	
## EMAIL JA ESTA CADASTRADO POR ALGUM USUARIO
400:Bad Request

  	{
	
	"message": "Email already exists"
	
	}
	
## EMAIL OU SENHA PASSADOS INCORRETAMENTE NO LOGIN
400:Bad Request

  	{
	
		"message": "Wrong email/password"
		
	}

# ROTAS NÃO AUTENTICADAS

## CADASTRO DE USUARIO.

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
			"id": "6ef34565-2822-40a8-b002-e88247b3d8a0",
			"name": "Adriano Nóbrega",
			"email": "adrianonobrega26@gmail.com",
			"phone": "83 998458056",
			"created_at": "2022-09-30T14:40:21.685Z"
	}

## LOGIN DE USUARIO.


POST /users/login

### Exemplo de requisição:

	{
		"email":"adrianonobrega26@gmail.com",
		"password":"1234"
	}

### Exemplo de resposta:
200:OK

		{
			"user_id": "6ef34565-2822-40a8-b002-e88247b3d8a0",
			"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkcmlhbm9ub2JyZWdhMjasdsdsdasdsaddsFsdsSFDFF"
		}
		
# ROTAS AUTENTICADAS

## LISTAR TODOS OS USUARIOS.

GET /users

### Exemplo de resposta:
200:OK

		[
			{
				"id": "77f11266-9813-4ce2-ba98-efec7815766c",
				"name": "Adriano Nóbrega",
				"email": "adrianonosbregsa26@gmail.com",
				"phone": "83 996408626",
				"created_at": "2022-09-19T20:39:23.148Z",
				"updated_at": "2022-09-19T20:39:23.148Z"
			},
			{
				"id": "746acb8b-6d13-4eb7-9e0c-233d134fa698",
				"name": "Adriano Nóbrega",
				"email": "adrianonobrega26@gmail.com",
				"phone": "83 9964088516",
				"created_at": "2022-09-19T20:39:38.760Z",
				"updated_at": "2022-09-19T20:39:38.760Z"
			}
		]

## LISTAR O USUARIO ESPECIFICO.

GET /users/:id <br>
OBS: id do usuario cadastrado.

### Exemplo de resposta:
200:OK

	{
		"id": "77f11266-9813-4ce2-ba98-efec7815766c",
		"name": "Adriano Nóbrega",
		"email": "adrianonosbregsa26@gmail.com",
		"phone": "83 996408016",
		"created_at": "2022-09-19T20:39:23.148Z",
		"updated_at": "2022-09-19T20:39:23.148Z"
	}


## ATUALIZAR O USUARIO ESPECIFICO.
POST /users/:id <br>
OBS: id do usuario cadastrado.

### Exemplo de requisição:

	{
		"email":"adriano@gmail.com",
		"phone":"83 996408020",
		"password":"12345"
	}

### Exemplo de resposta:
200:OK

	{
		"email": "adriano@gmail.com",
		"phone": "83 996408020",
	}
	

## DELETAR O USUARIO ESPECIFICO.
POST /users/:id <br>
OBS: id do usuario cadastrado.

200:OK

## CADASTRAR CONTATO
POST /contacts/:id <br>
OBS: id do usuario cadastrado.

### Exemplo de requisição:

	{
		"name":"jose",
		"email":"jose@gmail.com",
		"phone":"21 3342-1341"
	}

### Exemplo de resposta:
201:Created

	{
		"id": "ccb6e32e-0a52-4b5f-80d1-d7cade2de580",
		"name": "jose",
		"email": "jose@gmail.com",
		"phone": "21 3343-1341",
		"user": {
		"id": "6ef34565-2822-40a8-b002-e88247b3d8a0",
		"name": "Adriano Nóbrega",
		"created_at": "2022-09-30T14:40:21.685Z",
		"updated_at": "2022-09-30T14:47:59.385Z"
	},
		"created_at": "2022-09-30T15:43:15.707Z"
	}
	
## LISTAR TODOS OS CONTATOS
GET /contacts/ <br>

### Exemplo de resposta:
200:OK

	[
	{
		"id": "4a8533d8-95a5-4446-b7bf-72467a8d91cb",
		"name": "Adriano Nóbrega",
		"email": "adrianonobrega26@gmail.com",
		"phone": "83 998458056",
		"user": {
			"id": "6ef34565-2822-40a8-b002-e88247b3d8a0",
			"name": "Adriano Nóbrega"
		},
		"created_at": "2022-09-30T14:40:21.731Z",
		"updated_at": "2022-09-30T14:40:21.731Z"
	},
	{
		"id": "6d404b9e-b63c-4259-a71a-c620cbe32aa1",
		"name": "jose",
		"email": "jozsedsssdsdsdsddsd@gmail.com",
		"phone": "21 22d4dsd6sdsdsdd-1341",
		"user": {
			"id": "6ef34565-2822-40a8-b002-e88247b3d8a0",
			"name": "Adriano Nóbrega"
		},
		"created_at": "2022-09-30T15:42:45.217Z",
		"updated_at": "2022-09-30T15:42:45.217Z"
	}
	]
	

## LISTAR TODOS OS CONTATOS REFERENTE AO USUARIO
GET /contacts/:id <br>
OBS: id do usuario cadastrado.

		[
			{
				"id": "2cef5467-af62-4da0-b06b-ffe0c4cc3180",
				"name": "abcd",
				"email": "abcdsass@gmasil.com",
				"phone": "83 9956 45s08016",
				"user": {
					"id": "949f80e5-fe3a-4966-8090-e9074d4be0e1",
					"name": "abcd"
				},
				"created_at": "2022-09-22T18:45:49.361Z",
				"updated_at": "2022-09-22T18:45:49.361Z"
			},
			]

## ATUALIZAR CONTATO
PATCH /contacts/:id <br>
OBS: id do cadastro.

### Exemplo de requisição:
200:OK

		{
			"name":"Adriano",
			"email":"adriano007@gmail.com",
			"phone":"83 996408016"
		} 

### Exemplo de resposta:

		{
			"name":"Adriano",
			"email":"adriano007@gmail.com",
			"phone":"83 996408016"
		} 
		
## DELETAR CONTATO
DELETE /contacts/:id <br>
OBS: id do cadastro. <br>
200:OK
