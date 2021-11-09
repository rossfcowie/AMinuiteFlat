/*
Developer: Ross Cowie (Arumage)

*/


const { test, expect } = require('@jest/globals')
const create = require('./create')

test('creates a suitable game board when the function is called.',()=>{
    expect(create().total).toBe(50);
});