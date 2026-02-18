const { EventEmitter } = require('events');

class Tracker extends EventEmitter {
    track() {
        console.log('tracker run');

        this.emit('msg', { id: 1, msg: 'Hi' });
    }
}

module.exports = Tracker;