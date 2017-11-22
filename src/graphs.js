module.exports = class Graphs {
  constructor (graphsAndNodes) {
    if (!graphsAndNodes) {
      throw new Error('missing argument graphsAndNodes on the Graphs constructor')
    }
    this.graphs = graphsAndNodes
  }
  calculateDistance (...nodes) {
    let distance = 0
    let index = 0
    for (index; index < nodes.length - 1; index++) {
      const currentDist = this.graphs[nodes[index]][nodes[index + 1]]
      if (isNaN(currentDist)) {
        throw new Error('NO SUCH ROUTE')
      }
      distance += currentDist
    }
    return distance
  }
}
