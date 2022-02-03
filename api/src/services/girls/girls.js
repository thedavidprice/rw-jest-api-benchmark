import { db } from 'src/lib/db'

export const girls = () => {
  return db.girl.findMany()
}

export const girl = ({ id }) => {
  return db.girl.findUnique({
    where: { id },
  })
}

export const createGirl = ({ input }) => {
  return db.girl.create({
    data: input,
  })
}

export const updateGirl = ({ id, input }) => {
  return db.girl.update({
    data: input,
    where: { id },
  })
}

export const deleteGirl = ({ id }) => {
  return db.girl.delete({
    where: { id },
  })
}
