"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const faker_1 = require("@faker-js/faker");
const USERS = [];
let UsersController = class UsersController {
    getAll() {
        function createRandomUser() {
            const user = {
                id: faker_1.faker.datatype.uuid(),
                name: faker_1.faker.name.fullName(),
                username: faker_1.faker.internet.userName(),
                email: faker_1.faker.internet.email(),
                phone: faker_1.faker.phone.number(),
                website: faker_1.faker.internet.domainName(),
                company: faker_1.faker.company.name(),
            };
            return user;
        }
        while (USERS.length < 20) {
            USERS.push(createRandomUser());
        }
        return USERS;
    }
    getById(id) {
        let user;
        for (let i = 0; i < USERS.length; i++) {
            if (USERS[i].id === id) {
                console.log(USERS);
                console.log(USERS[i]);
                return (user = USERS[i]);
            }
        }
        return user ? user : console.log("Don't find");
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getById", null);
UsersController = __decorate([
    (0, common_1.Controller)('users')
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map