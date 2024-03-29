# Spotistas API

## Endpoint

### OAuth

Aqui a requisição deve ser feita em um navegador web onde o token de acesso deve ser retornado no cookie.

#### Autenticação

```http
GET /oauth
```

Redireciona o usuário para a página de login do provedor oauth.
Após o aceite dos termos, é redirecionado novamente para o cliente da requisição.
Altere no arquivo `.env` em `CLIENT_URI` para a url do cliente frontend.

#### Callback

```http
GET /oauth/callback
```

É chamado pelo provedor oauth após o usuário concluir com sucesso a autenticação e aceite dos termos.

### Artista do Mês

```http
GET /artists/month
```

### Top 5 Brasil

```http
GET /tracks/topBrazil
```

```http
GET /tracks?top=br&limit=5
```

Você pode customizar a quantidade de músicas retornas com `limit`:

```http
GET /tracks/topBrazil?limit=10
```

```http
GET /tracks?top=br&limit=10
```

Com essa query você tera um *Top 10 Brasil*.
