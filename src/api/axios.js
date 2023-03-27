import axios from 'axios';

const dotenv = require('dotenv');
dotenv.config();

const instance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: process.env.YOUTUBE_API_KEY,
  },
});

export default instance;