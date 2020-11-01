const { enumType } = require('@nexus/schema')

const DataStructureType = enumType({
  name: 'DataStructureType',
  members: ['LINKED_LIST', 'STACK', 'QUEUE', 'HASH_TABLE', 'ARRAY', 'STRING', 'GRAPH', 'TREE', 'BINARY_TREE', 'BINARY_SEARCH_TREE', 'HEAP', 'TRIE']
})

module.exports = {
  DataStructureType,
}
