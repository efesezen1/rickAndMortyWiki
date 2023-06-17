# Rick And Morty Wiki

This is a simple React.js project that showcases the use of `react-router-dom`, `react-query`, `styled-components`, and other libraries to create a Rick and Morty themed wiki.

The Rick and Morty wiki project provides information about the characters in the Rick and Morty show, it includes features like a list of characters, details of each character, a newsletter subscription and about page.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js installed on your machine. The project is tested with Node.js version `14.18.1`.

To check if Node.js is installed on your machine, run the following command in your terminal:

```
node --version
```

### Installing

After confirming that Node.js is installed on your machine, follow these steps to get the project running:

1. Clone the repository:

```
git clone https://github.com/your-username/rickAndMortyWiki.git
```

2. Navigate into the project directory:

```
cd rickAndMortyWiki
```

3. Install the project dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

Now, the application should be running on `http://localhost:3000` or `http://127.0.0.1:3000`.

## Project Structure

This project follows the standard layout of a React.js project. Here are some important files and directories:

1. `src/App.jsx`: This is the entry point of the application. It sets up the router and the main layout of the application.

2. `src/pages`: This directory contains the pages for the application. Each page corresponds to a route.

3. `src/components`: This directory contains the reusable components of the application. Components like `Navbar`, `SearchForm`, `Character` etc.

4. `Homelayout.jsx`: This file is responsible for the main layout that wraps around different pages. It includes a `Navbar` and a `Wrapper` for the page content. It also includes dark theme toggle logic.

5. `Character.jsx`: This file defines the `Character` component, which displays detailed information about each character.

## Built With

-  [React](https://reactjs.org/)
-  [React-Router-Dom](https://reactrouter.com/)
-  [React-Query](https://react-query.tanstack.com/)
-  [Styled-Components](https://styled-components.com/)
-  [Axios](https://axios-http.com/)
-  [React-Lottie](https://www.npmjs.com/package/react-lottie)
-  [React-Icons](https://react-icons.github.io/react-icons/)
-  [React-Toastify](https://fkhadra.github.io/react-toastify/)

## Developer Tools

The following tools are used for linting and type checking:

-  [ESLint](https://eslint.org/)
-  [Vite](https://vitejs.dev/)
-  [@types/react](https://www.npmjs.com/package/@types/react)
-  [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Acknowledgements

-  Thanks to the creators of Rick and Morty for such an awesome show!
-  Thanks to all the open-source contributors who made the libraries used in this project.
