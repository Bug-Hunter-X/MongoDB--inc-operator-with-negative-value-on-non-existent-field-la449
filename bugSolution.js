```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:-1}, $setOnInsert:{counter:0}});
//Alternative solution using $set to handle initial field creation
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{"$set":{"counter":{"$ifNull":["$counter",0]}},$inc:{counter:-1}});
```