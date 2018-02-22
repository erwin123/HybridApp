import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let account = [
      { id: 11, username: 'erwin', password:"admin", firstName:"erwin", lastName:"antonius" },
      { id: 12, username: 'hayley', password:"admin", firstName:"hayley", lastName:"williams" },
      { id: 13, username: 'victor', password:"admin", firstName:"victor", lastName:"solihin" },
      { id: 14, username: 'ramsey', password:"admin", firstName:"ramsey", lastName:"alinski" },
      { id: 15, username: 'drogba', password:"admin", firstName:"drogba", lastName:"didier" }
    ];
    return {account};
  }
}