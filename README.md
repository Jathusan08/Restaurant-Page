# Restaurant-Page

## Preview

<img src="image.png" alt="JU Restaurant" width="800" height="400">
<img src="image-1.png" alt="JU Restaurant" width="800" height="400">
<img src="image-2.png" alt="JU Restaurant" width="800" height="400">

## Introduction

This project creates a restaurant homepage using JavaScript to dynamically generate content. It uses Webpack to manage the project structure and bundle modules. The HTML includes a navigation bar and a content area where different tabs ("Home," "About Us," and "Menu") can be displayed via JavaScript. This project is part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)'s curriculum.

# Technologies Used

- HTML
- CSS
- JavaScript

## Prerequisites

- You need a modern web browser that supports HTML and CSS.
- [Node.js](https://nodejs.org/)
- npm (Node Package Manager), usually included with Node.js

## Installation

Clone this repository to your local machine or download the ZIP file and extract it to a local folder. Open the index.html file in your web browser.

## Dependencies

The project relies on the following key dependencies:

- **Webpack**: For bundling JavaScript and CSS.
- **HtmlWebpackPlugin**: For injecting the script tag into the HTML file.
- **MiniCssExtractPlugin**: For extracting CSS into separate files.
- **TerserPlugin**: For JavaScript minification.
- **CssMinimizerWebpackPlugin**: For CSS minification.

For a full list of dependencies, see the `package.json` file.

## Install Dependencies

To install the required dependencies for this project, run the following command:

- **npm install**: is a command used in Node.js projects to install the dependencies listed in a package.json file.

## Features

Here are some key features of the JU Restaurant website project:

- **Tabbed Navigation**: Switch between Home, About Us, and Menu tabs using event listeners.
- **Dynamic Content**: DOM elements are created dynamically using JavaScript, allowing for easy content management.
- **Webpack Integration**: Uses Webpack for module bundling, CSS handling, and development server.
- **Separate CSS Styling**: CSS is separated from JavaScript for better organisation.

## Project Structure

The project is structured as follows:

- **src/**: Contains the source files for the project.
  - **index.js**: Main entry point for the JavaScript code.
  - **home.js**: JavaScript module for creating the Home tab content.
  - **aboutUs.js**: JavaScript module for creating the About Us tab content.
  - **menu.js**: JavaScript module for creating the Menu tab content.
  - **style.css**: Main CSS file for styling.
  - **index.html**: Base HTML file for the project.
- **dist/**: Output directory for the bundled files.
- **.gitignore**: Git configuration for ignoring certain files and directories.
- **webpack.common.js**: Common Webpack configuration.
- **webpack.dev.js**: Webpack configuration for development mode.
- **webpack.prod.js**: Webpack configuration for production mode.
- **package.json**: Project metadata and npm scripts.

## Development Workflow

The development workflow involves setting up Webpack for efficient development and production builds. The following npm scripts are provided:

- **npm run start**: Starts the development server with hot module reloading.
- **npm run build**: Builds the project for production.

Make sure to run the development server while working on the project to see changes in real-time.

## Credits

This project is created by [Jathusan08](https://github.com/Jathusan08). If you have any questions or suggestions, feel free to open an issue.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code.
