import { BaseEntity } from './BaseEntity'

export class TestProduct extends BaseEntity {
constructor() {
super('Test product')
}

override getDescription(): string {
    return this.name
}

}