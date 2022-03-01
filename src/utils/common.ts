import { keys, xor } from 'lodash/fp'
import { MongoError } from 'mongodb'

export const isDuplicateErrorOnFields = (error: Error, ...fields: string[]) => {
  if (!(error instanceof MongoError) || error.code !== 11000) {
    return false
  }

  // @ts-ignore
  const indexFields = keys(error.keyPattern)

  return xor(indexFields, fields).length === 0
}
