import { women, woman, createWoman, updateWoman, deleteWoman } from './women'

describe('women', () => {
  scenario('returns all women', async (scenario) => {
    const result = await women()

    expect(result.length).toEqual(Object.keys(scenario.woman).length)
  })

  scenario('returns a single woman', async (scenario) => {
    const result = await woman({ id: scenario.woman.one.id })

    expect(result).toEqual(scenario.woman.one)
  })

  scenario('creates a woman', async () => {
    const result = await createWoman({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a woman', async (scenario) => {
    const original = await woman({ id: scenario.woman.one.id })
    const result = await updateWoman({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a woman', async (scenario) => {
    const original = await deleteWoman({ id: scenario.woman.one.id })
    const result = await woman({ id: original.id })

    expect(result).toEqual(null)
  })
})
