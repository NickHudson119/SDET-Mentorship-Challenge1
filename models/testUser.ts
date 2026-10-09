import { BaseEntity } from './BaseEntity'

export class TestUser extends BaseEntity {
static readonly type = 'TestUser'

private _email: string

constructor(
    name: string,
    email: string
) {
    super(name)
    this._email = email
}

get email(): string {
    return this._email
}

set email(value: string) {
    this._email = value
}

setEmail(email: string): void {
    this.email = email
}

getUserInfo(): string {
    return `${this.name} - ${this.email}`
}

override getDescription(): string {
    return `Test user: ${this.name}`
}

}