# enquetes

- Esse projeto ussa PostgreSQL mas voce pode mudar para MySQL sem problema.
- Voce pode usar Docker tambem.

- Primeiro voce precisa instalar os pacotes do node
``` shell
npm install OU yarn install
```
- Primeiro voce vai ter quer configurar as variaveis de ambiente que esta no arquivo *.env-sample*
- Quando configurar voce pode rodar as migrations que estao na pasta server/migrations/*
- Voce pode rodar as migrations usando *sequelize-cli*

- misc é apenas uma pasta para representar algo, não para executar nada

``` shell
 npx sequelize-cli db:migrate
```

- Depois de rodar as migrations, o proximo passo vai ser iniciar a *api, e o web/server*
##### segue os comandos
``` shell
node server/api/api.js
```
Para iniciar o servidor web, vai para a pasta ui/web
``` shell
cd ui/web
```
Instale os pacotes do React e o Vite
``` shell
npm install
```
Depois execute o comando para rodar o web-server
```
npm run dev
```


PRONTO! Agora esta tudo certo!

- /form (rota para criar as enquetes)
- /poll/:id (rota para ver a enquete criada) - (:id - é o ID da enquete )
- /polls (ainda em desenvolvimento para ver todas as enquetes nao iniciadas, em andamento e finalizadas)
