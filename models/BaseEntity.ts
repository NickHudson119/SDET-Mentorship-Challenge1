export abstract class BaseEntity {
constructor(protected name: string) {}

getName(): string {
    return this.name;
}

abstract getDescription(): string;

}