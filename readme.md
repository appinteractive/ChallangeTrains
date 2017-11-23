# Challange - Trains 

[![Maintainability](https://api.codeclimate.com/v1/badges/4f2a7a710a4c27a1e904/maintainability)](https://codeclimate.com/github/appinteractive/ChallangeTrains/maintainability) 
[![Test Coverage](https://api.codeclimate.com/v1/badges/4f2a7a710a4c27a1e904/test_coverage)](https://codeclimate.com/github/appinteractive/ChallangeTrains/test_coverage) 
[![CircleCI](https://circleci.com/gh/appinteractive/ChallangeTrains.svg?style=svg)](https://circleci.com/gh/appinteractive/ChallangeTrains)
[![NPM](https://img.shields.io/npm/v/challange-trains.svg)](https://www.npmjs.com/package/challange-trains)

## Description
The local commuter railroad services a number of towns in Kiwiland. Because of monetary concerns, all of the tracks are 'one-way.' That is, a route from Kaitaia to Invercargill does not imply the existence of a route from Invercargill to Kaitaia. In fact, even if both of these routes do happen to exist, they are distinct and are not necessarily the same distance!

The purpose of this problem is to help the railroad provide its customers with information about the routes. In particular, you will compute the distance along a certain route, the number of different routes between two towns, and the shortest route between two towns.

#### Input 
A directed graph where a node represents a town and an edge represents a route between two towns. The weighting of the edge represents the distance between the two towns. A given route will never appear more than once, and for a given route, the starting and ending town will not be the same town.

#### Output 
For test input 1 through 5, if no such route exists, output 'NO SUCH ROUTE'. Otherwise, follow the route as given; do not make any extra stops! For example, the first problem means to start at city A, then travel directly to city B (a distance of 5), then directly to city C (a distance of 4).

#### Problems:                
1. The distance of the route A-B-C.
2. The distance of the route A-D.
3. The distance of the route A-D-C.
4. The distance of the route A-E-B-C-D. 
5. The distance of the route A-E-D.

#### Test Input:
For the test input, the towns are named using the first few letters of the alphabet from A to D. A route between two towns (A to B) with a distance of 5 is represented as AB5.
Graph: AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7

#### Expected Output:
- Output #1: 9
- Output #2: 5
- Output #3: 13
- Output #4: 22
- Output #5: NO SUCH ROUTE

## Install

```
$ npm install challange-trains
```


## Usage

```js
const Graphs = require('challange-trains')

// initialize
const Trains = new Graphs({
  A: {
    B: 5,
    E: 7
  },
  B: {
    C: 4
  },
  C: {
    D: 8
  }
})

// calculate distance for a given route
Trains.calculateDistance('A', 'B', 'C') // Output: 9
Trains.calculateDistance('A', 'E')      // Output: 7
Trains.calculateDistance('A', 'C')      // throws new Error('NO SUCH ROUTE')
```

## Test

```
// inside the repository
$ npm install 
$ npm run test
```

## License

MIT © Grzegorz Leoniec (@WillKnowThat)
