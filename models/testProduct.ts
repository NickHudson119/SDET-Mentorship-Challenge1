import { TestEntity } from "./testEntity";

export class TestProduct implements TestEntity {
    getDescription(): string {
        return 'Test product'
    }
}