const { objectType } = require('@nexus/schema')

const Style = objectType({
  name: 'Style',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.questions({ pagination: false })
  },
})

module.exports = {
  Style,
}
