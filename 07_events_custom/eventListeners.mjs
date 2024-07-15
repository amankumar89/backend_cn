import { UserEvents } from './userEvents.mjs';

const userEvents = new UserEvents();

function saveToDatabase(){
  console.log('Saving to database');
}
function sendNotification(){
  console.log('Sending notification');
}
function updateTimeline(){
  console.log('Updating timeline');
}

userEvents.addListener('postCreated', saveToDatabase);
userEvents.addListener('postCreated', sendNotification);
userEvents.addListener('postCreated', updateTimeline);

userEvents.createPost('this is new post');