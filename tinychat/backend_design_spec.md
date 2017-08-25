Here is where your spec/explanation to the tinychat backend developer goes.

POST routes:
- to '/addMessage'
- accepts an plain object 
  - example: { author: 'bobo', content: 'hi', timestamp: '123567', last_edited: '123461'}
  - **handle message id to be unique from json**

GET routes:
- to '/getMessage'
- read from JSON or from DB, send to front-end in the same format as the fake JSON file
- 