import { girls, girl, createGirl, updateGirl, deleteGirl } from './girls'

describe('girls', () => {
  scenario('returns all girls', async (scenario) => {
    const result = await girls()

    expect(result.length).toEqual(Object.keys(scenario.girl).length)
  })

  scenario('returns a single girl', async (scenario) => {
    const result = await girl({ id: scenario.girl.one.id })

    expect(result).toEqual(scenario.girl.one)
  })

  scenario('creates a girl', async () => {
    const result = await createGirl({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a girl', async (scenario) => {
    const original = await girl({ id: scenario.girl.one.id })
    const result = await updateGirl({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a girl', async (scenario) => {
    const original = await deleteGirl({ id: scenario.girl.one.id })
    const result = await girl({ id: original.id })

    expect(result).toEqual(null)
  })
})
