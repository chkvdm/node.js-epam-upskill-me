/*
* Task 1: Days to New Year
*/
function getDaysToNewYear(date: string | Date): number {
    try {
      const newYear: Date = new Date ("01.01.2023");
      if (typeof date === "string") {
        const [day, month, year]: string[] = date.split('.');
        const dateIsoFormat: Date = new Date(`${month}.${day}.${year}`);
        const dayCount: number = Math.ceil(
          (newYear.getTime() - dateIsoFormat.getTime()) / (1000*60*60*24)
        );
        return dayCount
      }
      const dayCount: number = Math.ceil(
        (newYear.getTime() - date.getTime()) / (1000*60*60*24)
      );
      return dayCount;
    } catch {
      throw new Error('Some Error');
    }
  }
  
  /*
  * Task 2: Last to first
  */
  function lastToFirst(value: string): string {
    try {
      if (value.length > 1) {
        const modifiedString = `${Array.from(value)[value.length - 1]}${value.substring(1, value.length - 1)}${Array.from(value)[0]}`;
        return modifiedString;
      }
      return value;
    } catch {
      throw new Error('Some Error');
    }
  }
  
  /*
  * Task 3: Group organization users
  */
  /*
      const users = [
          {name: 'Bill', login: 'bill01', surname: 'Jobs', type: 'EMPLOYEE', address: {officeId: 123, placeId: 1222}},
          {name: 'Fill', login: 'fill007', surname: 'Filler', type: 'CONTRACTOR', contractorCompanyName: 'Microsoft'},
          {name: 'Alex', login: 'alex777', type: 'EMPLOYEE', address: {officeId: 222, placeId: 333}},
          {name: 'John', login: 'coolJohn', type: 'CONTRACTOR', contractorCompanyName: 'Apple'},
      ];
  
      const result = {
          employees: [
              {name: "Bill", login: "bill01", surname: "Jobs", type: "EMPLOYEE", address: {officeId: 123, placeId: 1222}},
              {name: "Alex", login: "alex777", type: "EMPLOYEE", address: {officeId: 222, placeId: 333}}
          ],
          contractors: [
              {name: "Fill", login: "fill007", surname: "Filler", type: "CONTRACTOR", contractorCompanyName: "Microsoft"},
              {name: "John", login: "coolJohn", type: "CONTRACTOR", contractorCompanyName: "Apple"}
          ]
      }
  */
  type User = {
    name: string; 
    login: string;
    surname: string;
    type: "EMPLOYEE" | "CONTRACTOR"; 
    address: { officeId: number; placeId: number };
  }
  
  type SortedUser = {
    employees: User[]; 
    contractors: User[];
  }
  
  function groupOrgUsers(users: User[]): SortedUser {
    try {
      const employees: User[] = [];
      const contractors: User[] = [];
      users.forEach(user => {
        if (user.type === "EMPLOYEE") {
          employees.push(user);
        } else {
          contractors.push(user);
        }
      })
      const result: SortedUser = {
        employees,
        contractors
      };
      return result;
    } catch {
      throw new Error('Some Error');
    }
  }
  
  
  export {getDaysToNewYear, lastToFirst, groupOrgUsers};
  
  