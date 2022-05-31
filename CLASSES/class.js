// const http=require('http');
const EventEmmiter=require('events')
const Event=new EventEmmiter;
Event.on('message',()=>{
    console.log("Hello World");
})
Event.emit('message');