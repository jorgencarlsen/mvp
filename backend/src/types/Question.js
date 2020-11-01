const { objectType } = require('@nexus/schema')

const Question = objectType({
  name: 'Question',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.user()
    t.model.userId()
    t.model.url()
    t.model.algorithm()
    t.model.dataStructure()
    t.model.solved()
    t.model.difficulty()
    t.model.userDifficulty()
    t.model.notes()
    t.model.userSolution()
    t.model.solution()
    t.model.timeSpent()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

module.exports = {
  Question,
}
