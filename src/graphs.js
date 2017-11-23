const graphs = class Graphs {
  /**
   * Initialize the Graph
   *
   * @param graphsAndNodes Object
   */
  constructor (graphsAndNodes) {
    if (!graphsAndNodes || typeof graphsAndNodes !== 'object') {
      throw new TypeError(`Expected an object, got ${typeof graphsAndNodes}`);
    }
    this.graphs = graphsAndNodes
  }
  /**
   * Calculates the distances between a list of nodes
   *
   * @param nodes Arguments as strigs
   * @returns {number|Error}
   */
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
module.exports = graphs
