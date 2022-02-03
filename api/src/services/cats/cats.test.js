import { cats, cat, createCat, updateCat, deleteCat } from './cats'

describe('cats', () => {
  scenario('returns all cats', async (scenario) => {
    const result = await cats()

    expect(result.length).toEqual(Object.keys(scenario.cat).length)
  })

  scenario('returns a single cat', async (scenario) => {
    const result = await cat({ id: scenario.cat.one.id })

    expect(result).toEqual(scenario.cat.one)
  })

  scenario('creates a cat', async () => {
    const result = await createCat({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a cat', async (scenario) => {
    const original = await cat({ id: scenario.cat.one.id })
    const result = await updateCat({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a cat', async (scenario) => {
    const original = await deleteCat({ id: scenario.cat.one.id })
    const result = await cat({ id: original.id })

    expect(result).toEqual(null)
  })
})
