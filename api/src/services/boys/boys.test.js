import { boys, boy, createBoy, updateBoy, deleteBoy } from './boys'

describe('boys', () => {
  scenario('returns all boys', async (scenario) => {
    const result = await boys()

    expect(result.length).toEqual(Object.keys(scenario.boy).length)
  })

  scenario('returns a single boy', async (scenario) => {
    const result = await boy({ id: scenario.boy.one.id })

    expect(result).toEqual(scenario.boy.one)
  })

  scenario('creates a boy', async () => {
    const result = await createBoy({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a boy', async (scenario) => {
    const original = await boy({ id: scenario.boy.one.id })
    const result = await updateBoy({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a boy', async (scenario) => {
    const original = await deleteBoy({ id: scenario.boy.one.id })
    const result = await boy({ id: original.id })

    expect(result).toEqual(null)
  })
})
