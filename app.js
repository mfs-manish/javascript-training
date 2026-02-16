// import { add } from './module-export.mjs';

const logger = require('./logger');

console.log(logger);

// logger.log('message');
logger('message from app js');

// add();