import { db } from 'src/lib/db'

export const boys = () => {
  return db.boy.findMany()
}

export const boy = ({ id }) => {
  return db.boy.findUnique({
    where: { id },
  })
}

export const createBoy = ({ input }) => {
  return db.boy.create({
    data: input,
  })
}

export const updateBoy = ({ id, input }) => {
  return db.boy.update({
    data: input,
    where: { id },
  })
}

export const deleteBoy = ({ id }) => {
  return db.boy.delete({
    where: { id },
  })
}
