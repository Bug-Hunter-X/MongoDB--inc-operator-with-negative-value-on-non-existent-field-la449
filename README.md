# MongoDB $inc operator with negative value on non-existent field

This repo demonstrates an uncommon error when using the `$inc` operator in MongoDB.
Specifically, attempting to decrement a non-existent field using `$inc` with a negative value does not create the field as expected.

## Bug
The `bug.js` file contains code that attempts to decrement a counter using `$inc` without checking if the counter field exists.
This results in the field not being created and the operation having no effect.

## Solution
The `bugSolution.js` demonstrates the correct approach: using the `$inc` operator within a `$set` operation to initialize the field before incrementing it or using the $setOnInsert operator