import { faker } from '@faker-js/faker';

function createRandomDog() {
  const sex = (faker.name.sexType());
  const firstName = faker.name.firstName(sex);
  const age = Math.ceil(Math.random()*13)
  return {
    _id: faker.datatype.uuid(),
    firstName,
    sex,
    age,
  };
}

export const dog =  createRandomDog;
