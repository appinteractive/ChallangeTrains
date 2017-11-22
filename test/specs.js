'use strict'

const Graphs = require('../src/graphs')
const Trains = new Graphs({
  A: {
    B: 5,
    D: 5,
    E: 7
  },
  B: {
    C: 4
  },
  C: {
    D: 8,
    E: 2
  },
  D: {
    C: 8,
    E: 6
  },
  E: {
    B: 3
  }
})
const assert = require('assert')

describe('Trains - Calculate Route Distance', () => {

  // Route A-B-C
  it('Route A-B-C has a distance of 9', () => {
    assert.equal(9, Trains.calculateDistance('A', 'B', 'C'))
  })
  it('Route A-B-C doesn`t have a distance of 1', () => {
    assert.notEqual(1, Trains.calculateDistance('A', 'B', 'C'))
  })

  // Route A-D
  it('Route A-D has a distance of 5', () => {
    assert.equal(5, Trains.calculateDistance('A', 'D'))
  })
  it('Route A-D doesn`t have a distance of 2', () => {
    assert.notEqual(2, Trains.calculateDistance('A', 'D'))
  })

  // Route A-D-C
  it('Route A-D-C has a distance of 13', () => {
    assert.equal(13, Trains.calculateDistance('A', 'D', 'C'))
  })
  it('Route A-D-C doesn`t have a distance of 3', () => {
    assert.notEqual(3, Trains.calculateDistance('A', 'D', 'C'))
  })

  // Route A-E-B-C-D
  it('Route A-E-B-C-D has a distance of 22', () => {
    assert.equal(22, Trains.calculateDistance('A','E','B','C','D'))
  })
  it('Route A-E-B-C-D doesn`t have a distance of 4', () => {
    assert.notEqual(4, Trains.calculateDistance('A','E','B','C','D'))
  })

  // Route A-E-D
  it('Route A-E-D does not exist and throws an error with the message "NO SUCH ROUTE"', () => {
    assert.throws(() => Trains.calculateDistance('A','E','D'), Error, 'NO SUCH ROUTE')
  })
})