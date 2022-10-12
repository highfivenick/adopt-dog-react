import { faker } from '@faker-js/faker';

function createRandomDog() {
  const sex = (faker.name.sexType());
  const firstName = faker.name.firstName(sex);

  return {
    _id: faker.datatype.uuid(),
    firstName,
    sex,
  };
}

export const dog =  createRandomDog;
