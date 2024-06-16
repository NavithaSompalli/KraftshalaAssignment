# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




# Weather Application

A weather application built with React that fetches weather data from the OpenWeatherMap API. This application supports dark mode and allows users to search for weather data by city.

## Features

- Fetches current weather data based on user's location.
- Allows users to search for weather data by city.
- Dark mode toggle.
- Displays multiple weather data entries.

## Installation

1. **Clone the repository:**


    git clone https://github.com/NavithaSompalli/KraftshalaAssignment.git
    


2. **Install dependencies:**

    
    npm install
    

3.  project and adding OpenWeatherMap API key:**

    
    REACT_APP_WEATHER_API_KEY=78f1b9448d3227cc20ba6817f0a6a813
    ```

4. **Run the development server:**

    ```sh
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

1. When the app loads, it will fetch and display weather data for the user's current location.
2. Use the search bar to search for weather data by city.
3. Use the dark mode toggle to switch between light and dark modes.

## File Structure

- `src/App.js`: Main component that handles fetching weather data and rendering other components.
- `src/components/WeatherDisplay/WeatherDisplay.js`: Component to display weather data.
- `src/components/SearchBar/SearchBar.js`: Component to handle city search.
- `src/components/DarkModeToggle/DarkModeToggle.js`: Component to toggle dark mode.
- `src/App.css`: Styles for the application.

## Deployment

### Deploying to GitHub Pages

1. **Install `gh-pages` package:**

    ```sh
    npm install gh-pages --save-dev
    ```

2. **Update `package.json`:**

    Add a `homepage` field and `predeploy`/`deploy` scripts:

    ```json
    "homepage": "https://github.com/NavithaSompalli/KraftshalaAssignment.git",
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```

3. **Deploy:**

    ```sh
    npm run deploy
    ```

### Deploying to Netlify

1. **Build your app:**

    ```sh
    npm run build
    ```

2. **Sign up and log in to Netlify.**

3. **Drag and drop the `build` folder into the Netlify dashboard.**



## Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api)
- [React](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)


### 'Published link ##### 
https://main--dashing-mermaid-230253.netlify.app/