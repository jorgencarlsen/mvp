const { enumType } = require('@nexus/schema')

const Algorithm = enumType({
  name: 'Algorithm',
  members: ['DYNAMIC_PROGRAMMING', 'POINTERS', 'RECURSION', 'PATH_FINDING', 'GRAPH_TRAVERSAL', 'SORTING', 'SEARCHING']
})

module.exports = {
  Algorithm,
}
