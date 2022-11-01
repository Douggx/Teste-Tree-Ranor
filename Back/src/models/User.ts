export class User {
  private name: string;
  private email: string;
  private phone: string;


  constructor(
    name: string,
    email: string,
    phone: string,
  ) {
    (this.name = name),
      (this.email = email),
      (this.phone = phone)
  }

  public getName = () => {
    return this.name;
  };

  public getEmail = () => {
    return this.email;
  };

  public getPhone = () => {
    return this.phone
  }
}

export interface ICreateContactModel {
  name: string,
  email: string,
  phone: string
}

export interface IEditContactModel {
  id: string,
  name: string,
  email: string,
  phone: string
}

export interface IDeleteContactModel {
  id: string
}

