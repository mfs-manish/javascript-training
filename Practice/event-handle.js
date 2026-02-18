// const Emitter = require('events');

// const emitObj = new Emitter();

// emitObj.on('msg', () => {
//     console.log('event fired');

// });

// emitObj.emit('msg');

//------------------------

const Tracker = require('./tracker');

const tracker = new Tracker();

tracker.on('msg', (args) => {
    let { id, msg } = args;
    console.log('event fired', args);
    console.log(id, msg);

});

tracker.track();