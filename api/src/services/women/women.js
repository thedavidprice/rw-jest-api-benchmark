import { db } from 'src/lib/db'

export const women = () => {
  return db.woman.findMany()
}

export const woman = ({ id }) => {
  return db.woman.findUnique({
    where: { id },
  })
}

export const createWoman = ({ input }) => {
  return db.woman.create({
    data: input,
  })
}

export const updateWoman = ({ id, input }) => {
  return db.woman.update({
    data: input,
    where: { id },
  })
}

export const deleteWoman = ({ id }) => {
  return db.woman.delete({
    where: { id },
  })
}
