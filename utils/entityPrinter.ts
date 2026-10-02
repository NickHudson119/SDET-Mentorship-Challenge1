import { TestEntity} from '../models/testEntity'

export function printDescription(entity: TestEntity): string {
    return entity.getDescription();
}