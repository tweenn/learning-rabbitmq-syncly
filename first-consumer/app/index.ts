require('dotenv-flow').config();

import {
	listen as QueueListen
} from './queue';

QueueListen();
