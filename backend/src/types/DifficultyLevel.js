const { objectType } = require('@nexus/schema')

const DifficultyLevel = objectType({
  name: 'DifficultyLevel',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.questions({ pagination: false })
  },
})

module.exports = {
  DifficultyLevel,
}
