# 🔗 Short URL Generator

A simple URL shortener built with **Node.js**, **Express.js**, and **MongoDB**.

## Features

- Generate short URLs
- Redirect to the original URL using a short ID
- Track the number of clicks for each shortened URL

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

```bash
npm install
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/url` | Create a short URL |
| GET | `/:shortId` | Redirect to the original URL |
| GET | `/url/analytics/:shortId` | Get click count and visit history |

## Author

**Nanci Kabra**