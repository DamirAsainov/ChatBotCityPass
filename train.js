const { NlpManager } = require('node-nlp');

// Create a new instance of NLP Manager
const manager = new NlpManager({ languages: ['en'] });

// Add documents to the manager
manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'hey', 'greetings.hello');

manager.addDocument('en', 'bye', 'greetings.bye');
manager.addDocument('en', 'goodbye', 'greetings.bye');
manager.addDocument('en', 'see you later', 'greetings.bye');

// Add answers to the manager
manager.addAnswer('en', 'greetings.hello', 'Hello! How can I assist you today?');
manager.addAnswer('en', 'greetings.bye', 'Goodbye! Have a great day!');

// Train the manager
manager.train();

// Process some messages
(async () => {
    const response = await manager.process('en', 'Hi there!');
    console.log(response);
})();
