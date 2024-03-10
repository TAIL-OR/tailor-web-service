# Aplicação da solução TAIL-OR

O Web service do projeto TAIL-OR é constituído com o Framework ABP, desenvolvido pela Volosoft. O Banco de Dados utilizados é Postgres, o Back-end é feito com C# e o Front-end com Angular.
Quaisquer dúvidas sobre a aplicação desse framework podem ser encontradas no site oficial https://www.abp.io/

Para rodar a aplicação, primeiramente tenha instalado:
- Framework dotnet
- Angular (yarn)
- Docker

Você pode baixar a CLI do ABP com o comando: dotnet tool install -g Volo.Abp.Cli
Baixar essa CLI permite que você rode as soluções em ABP.

Na pasta angular, rode o comando: yarn install
Esse comando fará download de todas bibliotecas necessárias de Front-end

Alternativamente, pode-se utilizar o comando: abp install-libs
Esse comando fará todos downloads necessários de bibliotecas

Utilize o Docker para criar um contâiner com Banco Postgres e uma aplicação Redis.

Para configurar o Redis no Docker, utilize o comando: docker network create -d bridge redisnet (Caso tenha dúvidas, veja o tutorial em https://collabnix.com/how-to-setup-and-run-redis-in-a-docker-container/)

Para configurar um banco Postgres no Docker, siga a referência de https://davejansen.com/how-to-set-up-and-use-postgres-using-docker/

Para conectá-las à aplicação, coloque a porta do Banco de Dados no arquivo appsettings.json na pasta DbMigrator, Host e AuthServer.

Na pasta DbMigrator rode o comando: dotnet run
Esse comando fará a primeira seed do banco de dados

Para rodar a aplicação, siga os passos:
- Na pasta do angular, insira o comando: yarn install
- Na pasta Host, insira o comando: dotnet run
- Na pasta AuthServer, insira o comando: dotnet run
