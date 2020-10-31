const { objectType } = require('@nexus/schema')

const DataStructure = objectType({
  name: 'DataStructure',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.questions({ pagination: false })
  },
})

module.exports = {
  DataStructure,
}
