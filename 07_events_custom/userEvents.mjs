import * as Events from 'events';

export class UserEvents extends Events.EventEmitter {
  createPost(content) {
    console.log('Post Created');
    this.emit('postCreated');
  }
}