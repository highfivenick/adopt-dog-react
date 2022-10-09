import { faker } from '@faker-js/faker';

function createRandomDog() {
  const sex = (faker.name.sexType());
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  // const email = faker.helpers.unique(faker.internet.email, [
  //   firstName,
  //   lastName,
  // ]);

  return {
    _id: faker.datatype.uuid(),
    //avatar: faker.image.avatar(),
    //birthday: faker.date.birthdate(),
    //email,
    firstName,
    lastName,
    sex,
    //subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
}

export const dog = createRandomDog;
