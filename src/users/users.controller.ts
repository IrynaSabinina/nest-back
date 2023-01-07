import { Controller, Get, Param } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { CreateUser } from './types/User';

const USERS = [];
@Controller('users')
export class UsersController {
  @Get()
  getAll() {
    function createRandomUser(): CreateUser {
      const user = {
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        website: faker.internet.domainName(),
        company: faker.company.name(),
      };
      console.log(user);
      return user;
    }
    while (USERS.length < 20) {
      USERS.push(createRandomUser());
    }
    // console.log(USERS);
    return USERS;
  }
  @Get(':id')
  getById(@Param('id') id: string) {
    let user: CreateUser;
    for (let i = 0; i < USERS.length; i++) {
      if (USERS[i].id === id) {
        console.log(USERS);
        console.log(USERS[i]);
        return (user = USERS[i]);
      }
    }
    return user ? user : console.log("Don't find");
  }
}
