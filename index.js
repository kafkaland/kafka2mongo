const kafka = require('kafka-node');
const mongodb = require('mongodb');

/**
 * IN: kafka consumer
 */

const consumer = new kafka.Consumer(
  new kafka.Client(),
  [{topic: 'event'}]
);

/**
 * OUT: mongodb
 */

mongodb.MongoClient.connect('mongodb://localhost:27017/event', function (err, db) {
  console.log('connected')
});

