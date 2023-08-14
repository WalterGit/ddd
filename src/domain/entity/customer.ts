import Address from "./address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardsPoints: number = 0;

  get rewardPoints(): number {
    return this._rewardsPoints;
  }

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Customer ID is required");
    }
    if (this._name.length === 0) {
      throw new Error("Customer name is required");
    }
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  isActivate(): boolean {
    return this._active;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Cannot activate customer with blank address");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  get rewardsPoints(): number {
    return this._rewardsPoints;
  }

  addRewardsPoints(points: number) {
    this._rewardsPoints += points;
  }

  set Address(address: Address) {
    this._address = address;
  }

  changeAddress(address: Address) {
    this._address = address;
  }
}
