// @flow

export type UserType = {
  id: number,
  name: string,
  email: string,
}

export type FoodTruckType = {
  id: number,
  name: string,
  email: string,
  latitude: number,
  longitude: number,
  location: string,
  tags: Array<string>,

}

export type GraphQLContextType = {
  db: Object,
}
