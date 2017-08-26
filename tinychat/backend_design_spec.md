Here is where your spec/explanation to the tinychat backend developer goes.

Message Routes:

POST:
- to '/message/post'
- adding a new entry into message
- accepts a plain object (data)
  - example: { id: 5, author: 'bobo', content: 'hi', timestamp: '123567', last_edited: '123461'}
  - **handle message id to be unique from json**

GET:
- read from JSON or from DB, send to front-end in the same format as the fake JSON file
- to '/message/get'
- 

UPDATE:
- to '/message/update'
- update an entry with the given id
- accepts a plain object (data)
  - example: { id: 5, author: 'bobo', content: 'hi', timestamp: '123567', last_edited: '123461'}