import { db } from 'src/lib/db'

export const men = () => {
  return db.man.findMany()
}

export const man = ({ id }) => {
  return db.man.findUnique({
    where: { id },
  })
}

export const createMan = ({ input }) => {
  return db.man.create({
    data: input,
  })
}

export const updateMan = ({ id, input }) => {
  return db.man.update({
    data: input,
    where: { id },
  })
}

export const deleteMan = ({ id }) => {
  return db.man.delete({
    where: { id },
  })
}
