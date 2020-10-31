const { objectType } = require('@nexus/schema')

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.posts({ pagination: false })
    t.model.questions({ pagination: false })
    t.model.gitHubName()
    t.model.solutionsRepo()
  },
})

module.exports = {
  User,
}
