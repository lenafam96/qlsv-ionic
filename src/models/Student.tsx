class Student {
  private id: string;
  private name: string;
  private address: string;
  private avatar: string;
  private score: number;

  public constructor(
    id: string,
    name: string,
    address: string,
    avatar: string,
    score: number
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.avatar = avatar;
    this.score = score;
  }

  public getId(): string {
    return this.id;
  }

  public getAvatar(): string {
    return this.avatar;
  }

  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  public getScore(): number {
    return this.score;
  }

  public setId(value: string): void {
    this.id = value;
  }

  public setAvatar(value: string): void {
    this.avatar = value;
  }

  public setScore(value: number): void {
    this.score = value;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public setAddress(value: string): void {
    this.address = value;
  }
}

export { Student };
