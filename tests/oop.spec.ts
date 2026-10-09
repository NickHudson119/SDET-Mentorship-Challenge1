import { test, expect } from '@playwright/test'
import { TestUser } from '../models/testUser'
import { TestProduct } from '../models/testProduct'
import { printDescription } from '../utils/entityPrinter'

test('demostrate runtime polymorphism', () =>{
    const user = new TestUser('John', 'john@example.com')
    const product = new TestProduct()

    const userDescription = printDescription(user)
    const productDescription = printDescription(product)

    expect(userDescription).toBe('Test user: John')
    expect(productDescription).toBe('Test product')
    
    expect(TestUser.type).toBe("TestUser")
})

test('demonstrate inheritance from BaseEntity', () => {
const user = new TestUser('John', 'john@example.com')

expect(user.getName()).toBe('John')

})

test('demonstrate getter and setter accessors', () => {
const user = new TestUser('John', 'john@example.com')

expect(user.email).toBe('john@example.com')

user.email = 'john.new@example.com'

expect(user.email).toBe('john.new@example.com')

})