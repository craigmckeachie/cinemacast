

export class User {
  id: number | undefined = undefined;
  username = "";
  password = "";

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.username) this.username = initializer.username;
    if (initializer.password) this.password = initializer.password;
   
  }
}
