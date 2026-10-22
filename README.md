🌦️ React Weather App

A responsive weather application built with React and Vite that allows users to search for a city and view its current weather conditions using the OpenWeatherMap API.

✨ Features

* 🔍 Search for weather by city name
* 🌡️ View current temperature in Celsius
* 💧 Display humidity and feels-like temperature
* 🌤️ View weather conditions and related images
* 🌡️ View minimum and maximum temperatures
* ⚠️ Handle invalid city names and API errors
* 📱 Simple, responsive user interface

🛠️ Tech Stack

* React
* JavaScript
* HTML5
* CSS3
* Material UI
* OpenWeatherMap API
* Vite

🚀 Getting Started

1. Clone the repository

git clone https://github.com/ShreyanshMishra/react-weather-app.git

2. Open the project directory

cd react-weather-app

3. Install dependencies

npm install

4. Configure the API key

Create a .env file in the project root directory and add your OpenWeatherMap API key:

VITE_WEATHER_API_KEY=your_api_key_here

Get an API key from OpenWeatherMap.

5. Start the development server

npm run dev

Open the local URL displayed in your terminal.

🔐 Environment Variables

Keep your .env file private. It is excluded through .gitignore and should never be committed to GitHub.

Note: Vite environment variables prefixed with VITE_ are exposed to client-side code. Restrict your API key where supported; for stronger protection, use a backend to make API requests.

📂 Project Structure

react-weather-app/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── InfoBox.jsx
│   ├── InfoBox.css
│   ├── SearchBox.jsx
│   ├── SearchBox.css
│   ├── WeatherApp.jsx
│   ├── WeatherApp.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md

🎯 Purpose

This project helped me practice React components, state management with hooks, API integration, asynchronous JavaScript, error handling, and responsive UI development.

👨‍💻 Author

Shreyansh Mishra

* GitHub: @ShreyanshM1

⸻

⭐ If you find this project useful, consider giving the repository a star.