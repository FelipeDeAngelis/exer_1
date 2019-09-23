# Primeiro exxercício Topicos em Redes 3

## Faça essas ações

### Clonar repositório
\$ git clone https://github.com/FelipeDeAngelis/exer_1.git

### Atualizar dependências
\$ yarn

### Iniciar projeto
\$ yarn dev

## CRUD

### Add Matéria
URL: http://localhost:3000/tools

Parametros necessários: disciplina (disc), professor (prof), departamento (depar) e código (cod).
Validação: Verifica se o código ja foi adicionado anteriormente.

Ex:
{
	"disc" : "Tópicos de Redes 3",
	"prof"	:	"Flávio Elias",
	"depar" : "ENE",
	"cod" : 109584
}

### Listar Matéria
URL: http://localhost:3000/tools

### 
Parametros necessários: não precisa!
Validação: Sem validação.

Ex:
{
}

### Editar Materia
URL: http://localhost:3000/tools/{id}

### 
Parametros necessários: ID no banco referente a disciplina, código (cod) e o parâmetro que queria atualizar.
Validação: Valida se o código é o que corresponde ao ID selecionado.

Ex:
{
	"cod" : 109584,
	"disc" : "Tópicos em Redes 3"
}

### Deletar Materia
URL: http://localhost:3000/tools/{id}

### 
Parametros necessários: ID no banco referente a disciplina e código (cod).
Validação: Valida se o código é o que corresponde ao ID selecionado.

Ex:
{
	"cod" : 109584,
}