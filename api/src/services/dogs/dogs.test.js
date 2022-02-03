import { dogs, dog, createDog, updateDog, deleteDog } from './dogs'

describe('dogs', () => {
  scenario('returns all dogs', async (scenario) => {
    const result = await dogs()

    expect(result.length).toEqual(Object.keys(scenario.dog).length)
  })

  scenario('returns a single dog', async (scenario) => {
    const result = await dog({ id: scenario.dog.one.id })

    expect(result).toEqual(scenario.dog.one)
  })

  scenario('creates a dog', async () => {
    const result = await createDog({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a dog', async (scenario) => {
    const original = await dog({ id: scenario.dog.one.id })
    const result = await updateDog({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a dog', async (scenario) => {
    const original = await deleteDog({ id: scenario.dog.one.id })
    const result = await dog({ id: original.id })

    expect(result).toEqual(null)
  })
})
