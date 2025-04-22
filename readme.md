# 🎥 Studio Ghibli Movies App

Aplicativo desenvolvido em **React Native com Expo Router** que consome dados da [Ghibli API](https://ghibliapi.vercel.app/) e exibe uma vitrine estilizada com os filmes do Studio Ghibli.

---

## ✨ Funcionalidades

- Listagem dos filmes do Studio Ghibli
- Visual moderno no estilo catálogo (estilo streaming)
- Cards com imagem, título, título original e data de lançamento
- Tela de carregamento com Skeleton animado
- Navegação com `expo-router`

---

## 📱 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.dev/router)
- [Axios](https://axios-http.com/)
- [Moti](https://moti.fyi/) para animações
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) (via Expo)
- [Skeleton Placeholder](https://github.com/chramos/react-native-skeleton-placeholder) (com shimmer opcional, **removido**)

---

## 🚀 Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/Eduardo1985S/studio-ghibli.git
cd studio-ghibli-app
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o app:
```bash
npx expo start
```

Você pode testar no celular com o app Expo Go ou emulador Android/iOS.

---

## 📂 Estrutura do projeto

```bash
.
├── app/
│   └── index.js              # Tela inicial (lista de filmes)
├── components/
│   ├── FilmCard.js           # Componente visual dos filmes
│   └── SkeletonCard.js       # Skeleton animado para loading
├── assets/                   # (opcional) imagens e ícones
├── package.json
└── README.md
```

---

## 📡 API utilizada

https://ghibliapi.vercel.app/films

---

## 📸 Preview

---

## 🧑‍💻 Autor

Desenvolvido por Eduardo Correia

---

## 📃 Licença

Este projeto está licenciado sob a licença MIT.
