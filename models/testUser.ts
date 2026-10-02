import { TestEntity } from './testEntity'


export class TestUser implements TestEntity {
    static readonly type = 'TestUser'

    constructor(
        private name: string,
        private email: string
    ){}

    getName(): string {
        return this.name
    }

    setEmail(email: string): void {
        this.email = email
    }

    getUserInfo(): string {
        return `${this.name} - ${this.email}`;
    }

    getDescription(): string {
        return `Test user: ${this.name}`
    }
}