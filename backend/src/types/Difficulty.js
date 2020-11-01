const { enumType } = require('@nexus/schema')

const Difficulty = enumType({
  name: 'Difficulty',
  members: ['VERY_EASY', 'EASY', 'MEDIUM', 'HARD', 'VERY_HARD', 'EXTREMELY_HARD']
})

module.exports = {
  Difficulty,
}
