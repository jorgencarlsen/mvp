const { objectType } = require('@nexus/schema')

const Question = objectType({
  name: 'Question',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.url()
    t.model.style()
    t.model.dataStructure()
    t.model.solved()
    t.model.difficulty()
    t.model.userDifficulty()
    t.model.userSolution()
    t.model.solution()
    t.model.timeSpent()
    t.model.createdAt()
    t.model.upDatedAt()
  },
})

module.exports = {
  Question,
}
