import { faker } from '@faker-js/faker';

function createRandomPerson() {

  const fName = faker.name.firstName();
  const email = faker.internet.email(fName)
  return {
    _id: faker.datatype.uuid(),
    fName,
    email
  };
}
export const person = createRandomPerson;
