import { config } from 'dotenv';

config();

export default {
	mongodbURL: process.env.MONGODB_URI || 'mongodb://Localhost/football',

	API_KEY: process.env.API_KEY,
};
