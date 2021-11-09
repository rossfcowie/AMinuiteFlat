/*
Developer: Ross Cowie (Arumage)

*/


const { test, expect } = require('@jest/globals')
const create = require('./create')
const board =  [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]];


test('creates a suitable game board when the function is called.',()=>{
    expect(create()).toEqual(board);
});

