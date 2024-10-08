# App Finanças

Este é um projeto em React desenvolvido no curso Fábrica de Aplicativos, do [Sujeito Programador](https://github.com/devfraga).

<div style=" display: flex; justifyc-content: center; align-items: center; gap: 10px;">
    <img src="./assets/Screenshot_1727286241.png" width="200">
    <img src="./assets/Screenshot_1727286220.png" width="200">
    <img src="./assets/Screenshot_1727286233.png" width="200">
</div>

## Tecnologias utilizadas

- [React Native](https://reactnative.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Calendars](https://wix.github.io/react-native-calendars/docs/Intro)

## Como rodar localmente

Este projeto foi criado usando [Expo](https://expo.dev), portanto você pode seguir a documentação dele para fazer deploy do app.

No caso, primeiro você precisará baixar o [Android Studio]() no seu PC e rode um emulador de dispositivo. Se seu PC não for forte o suficiente para rodá-lo ou se você achar mais conveniente, baixe o app Expo Go no seu celular.

Então, clone este repositório usando:

```node
git clone https://github.com/RenanSantos7/app-financas.git
```

Você também vai precisar clonar [esse repositório](https://github.com/devfraga/backend-financas) repositório e seguir as instruções contidas nele para rodar o backend da aplicação.

Agora navegue para dentro da pasta em que o repositório foi clonado e instale as dependências:

```node
cd ./app-financas
npm i
// ou
cd ./app-financas
yarn
```

E por fim rode o projeto. Se estiver usando o emulador do Android Studio, use:

```node
npm run android
```

Se preferir usar o Expo Go, rode:
```node
npm run start
```

Um QR Code irá aparecer no terminal, então basta lê-lo com o Expo Go e o app irá rodar em seu celular.

## Licensa

O projeto está disponível publicamente com a licença [MIT](./LICENSE)
