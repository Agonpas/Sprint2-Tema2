db.restaurante.find({});
db.restaurante.find({},{name: 1, borough: 1, cuisine: 1});
db.restaurante.find({},{_id: 0, name: 1, borough: 1, cuisine: 1});
db.restaurante.find({},{_id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1});
db.restaurante.find({ "borough": "Bronx" });
db.restaurante.find({ "borough": "Bronx" }).limit(5);
db.restaurante.find({ "borough": "Bronx" }).skip(5).limit(5);
db.restaurante.find({ "grades.score": { $gt: 90 } });
db.restaurante.find({ "grades.score": { $gt: 80, $lt: 100 } });
db.restaurante.find({ "address.coord": { $lt: -95.754168 } });
db.restaurante.find({ $and: [ { "cuisine": { $ne: "American" } }, { "grades.score": { $gt: 70 } }, { "address.coord.0": { $lt: -65.754168 } }]});
db.restaurante.find({ "address.coord": { $lt:  -65.754168 }, "cuisine": { $ne: "American" }, "grades.score": { $gt: 90 } });
db.restaurante.find({ "cuisine": { $ne: "American" }, "borought": { $ne: "Brooklyn" }, "grades.grade": "A" }).sort( { "cuisine": -1 });
db.restaurante.find({"name": { $regex: /^Wil/i }},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurante.find({"name": { $regex: /ces$/i }}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurante.find({"name": { $regex: /reg/i }},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurante.find({ $and: [ {"borough": "Bronx"}, {"cuisine": { $in: ["American", "Chinese"] } }] });
db.restaurante.find({"borough": {$in: ["Bronx", "Staten Island", "Queens", "Brooklyn"]}},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurante.find({"borough": {$nin: ["Bronx", "Staten Island", "Queens", "Brooklyn"]}},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurante.find({"grades.score": {$lt: 10}},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurante.find({ $and: [ { "cuisine": { $eq: "Seafood" } }, { "borough": { $nin: ["American", "Chinese"] } }, { "name": { $not: { $regex: /^Wil/i } } }] }, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 });
db.restaurante.find({ "grades": {$elemMatch: {"grade": "A", "score": 11, "date": ISODate("2014-08-11T00:00:00Z")  }} }, {restaurant_id: 1, name: 1, grades: 1, _id: 0 });
db.restaurante.find({ "grades.1": {$elemMatch: {"grade": "A", "score": 9, "date": ISODate("2014-08-11T00:00:00Z")  }} }, {restaurant_id: 1, name: 1, grades: 1, _id: 0 });// revisar
db.restaurante.find({"coord.1": {$gt: 42, $lt: 52}}, {"restaurant_id": 1, "name": 1, "address": 1, "coord": 1}); //revisar
db.restaurante.find({},{_id: 0, name: 1, borough: 1, cuisine: 1}).sort({ "name": 1});
db.restaurante.find({},{_id: 0, name: 1, borough: 1, cuisine: 1}).sort({ "name": -1});
db.restaurante.find({},{_id: 0, name: 1, borough: 1, cuisine: 1}).sort({ "cuisine": 1, "borough": -1});
db.restaurante.find({"address.street": {$exists:true}},{_id: 0, name: 1, borough: 1, cuisine: 1, "address.street": 1});