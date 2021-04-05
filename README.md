<h1 align="center">
    Lápis & Borracha
</h1>

# Índice

- [Problemática](#-problemática)
- [Solução](#-solução)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Instalação](#-como-baixar-o-projeto)

---

## Problemática

"Nós sabemos o quanto é complicado para os pais poderem comprar material escolar para seus filhos. Os preços aumentam de semestre para semestre. Principalmente quando falamos de educação pública, onde a dificuldade é ainda maior e vem por diversos fatores..."

---

## Solução

Um aplicativo capaz de conectar pessoas de todo o Brasil em prol de uma causa em comum: material escolar para todos!

O responsável pela criança que precisa de doação faz o cadastro na plataforma e registra a criança comprovando sua matrícula na escola. Em seguida, ele deve escolher uma papelaria parceira e monta o orçamento com os materiais escolares que deseja, elaborando um post contando um pouquinho de sua trajetória até ali e os doadores podem visualizar os posts e contribuir com a arrecadação em grupo e se tornam elegíveis para recompensas cumulativas dentro da plataforma.

O responsável pela criança resgata os produtos com a papelaria. Seja pedido com frete ou resgate no local, basta que o entregador ou lojista leia o QR code presente no voucher do cliente e garanta a entrega para a pessoa certa. E um aplicativo dedicado para parceiros em que é possível administrar o estoque da loja, adicionando, removendo e editando itens. Esses itens ficam diretamente visíveis para os nossos clientes durante a elaboração dos orçamentos.


---

## 🚀 Tecnologias utilizadas

o projeto foi desenvolvido usando as seguintes tecnologias:

- [Node.js](https://nodejs.org/pt-br/docs/)
- [Express.js](http://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [MySQL](https://dev.mysql.com/doc/)
- [UUID](https://www.uuidtools.com/docs)
- [JWT](https://jwt.io/introduction/)
- Cors
- Bcryptjs

---

## 💾 Como baixar o projeto

- Primeiro instale o [Git](https://git-scm.com/), [Node.jS](https://nodejs.org/pt-br/download/) + [npm](https://www.npmjs.com/get-npm)
```bash
# Clonar o repositório
git clone https://github.com/unidos-do-stackoverflow/backend.git

# Entrar no diretório
cd backend

# Instalar as dependências
npm install

# Rodar o projeto
npm run dev
```
---

- Crie um arquivo .env na pasta raíz do projeto com as suas informações:

```
# Database
DB_HOST = host do banco de dados
DB_USER = user do banco de dados
DB_PASSWORD = senha
DB_NAME = nome do banco de dados

# JasonWebToken
JWT_KEY = chave para gerar o jason web token
JWT_EXPIRES_IN = tempo de expiração do token

# Bcrypt
BCRYPT_COST = 12
```

## Tabelas criadas no Workbench

### Usuários
```sql
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  dateOfBirth VARCHAR(50) NOT NULL,
  cpf VARCHAR(255) UNIQUE NOT NULL,
  numberOfChildren INT NOT NULL,
  address VARCHAR(255) DEFAULT null
);
```

Desenvolvido com 🧡 por:

- Fábio Alvarenga 
  [GitHub](https://github.com/fabio-alvarenga) | [Linkedin](https://www.linkedin.com/in/jove/)
  
- Matheus Montenegro
  [GitHub](https://github.com/matheusmontenegro97) | [Linkedin](https://www.linkedin.com/in/matheus-montenegro-8a90931bb/)
  
- Renato Carlos 
   [GitHub](https://github.com/ZFRenato) | [Linkedin](https://www.linkedin.com/in/renato-carvalho-82129420b)
   
- Isabela Rocha 
   [GitHub](https://github.com/Isabelar07) | [Linkedin](https://www.linkedin.com/in/isabela-rocha-silveira-4875611a3/)
