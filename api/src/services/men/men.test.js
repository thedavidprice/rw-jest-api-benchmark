import { men, man, createMan, updateMan, deleteMan } from './men'

describe('men', () => {
  scenario('returns all men', async (scenario) => {
    const result = await men()

    expect(result.length).toEqual(Object.keys(scenario.man).length)
  })

  scenario('returns a single man', async (scenario) => {
    const result = await man({ id: scenario.man.one.id })

    expect(result).toEqual(scenario.man.one)
  })

  scenario('creates a man', async () => {
    const result = await createMan({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a man', async (scenario) => {
    const original = await man({ id: scenario.man.one.id })
    const result = await updateMan({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a man', async (scenario) => {
    const original = await deleteMan({ id: scenario.man.one.id })
    const result = await man({ id: original.id })

    expect(result).toEqual(null)
  })
})
