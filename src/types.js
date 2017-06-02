// @flow

export type UserType = {
  id: number,
  name: string,
  email: string,
}

export type FoodTruckType = {
  id: number,
  name: string,
  description: string,
  email: string,
  latitude: number,
  longitude: number,
  location: string,
  tags: Array<string>,
  cusineTypes: Array<string>,
  diets: Array<string>,  
  owner: UserType,
  website: string,
  twitter: string,
}

export type GraphQLContextType = {
  db: Object,
}
