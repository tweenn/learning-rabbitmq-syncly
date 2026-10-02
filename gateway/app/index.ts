require('dotenv-flow').config();

import {
	listen as QueueListener
} from './queue';

import Server from './server';

QueueListener();
Server();
