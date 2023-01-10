import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();

eventEmitter.on('error', (err) => { 
    console.log(err); 
})

export const registerEventListener = (eventName) => {
    eventEmitter.on(eventName, (data) => {
        console.log(data.toUpperCase())
    });
}

export const triggerEvent = (eventName, data) => {
    eventEmitter.emit(eventName, data);
}

