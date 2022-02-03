import { db } from 'src/lib/db'

export const cats = () => {
  return db.cat.findMany()
}

export const cat = ({ id }) => {
  return db.cat.findUnique({
    where: { id },
  })
}

export const createCat = ({ input }) => {
  return db.cat.create({
    data: input,
  })
}

export const updateCat = ({ id, input }) => {
  return db.cat.update({
    data: input,
    where: { id },
  })
}

export const deleteCat = ({ id }) => {
  return db.cat.delete({
    where: { id },
  })
}
