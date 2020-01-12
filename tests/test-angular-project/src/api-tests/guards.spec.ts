import { inject } from '@angular/core/testing';
import { Customer, Pet, Position, Right } from '../api-no-tags/models';
import { isCustomer, isPet, isTag } from '../api-no-tags/guards';

describe('TypeGuards', () => {
  const validPet: Pet = {
    category: {},
    id: 42,
    name: 'Dogo',
    photoUrls: ['dogo.jpg'],
    tags: [{ id: 1, name: 'dog' }, { name: 'noCat' }],
  };

  const validCustomer: Customer = {
    address: 'My address',
    name: 'foo',
    position: Position.First,
    right: Right.MEMBER,
    email: 'email@email.com',
    lastName: 'string',
    password: 'string',
    phone: 'string',
    username: 'string',
    userStatus: 42,
  };

  test('Pet is valid Pet', inject([], () => {
    expect(isPet({ ...validPet, tags: undefined })).toBeTruthy();
    expect(isPet(validPet)).toBeTruthy();
    expect(isPet({ name: 'Pes', photoUrls: [] })).toBeTruthy();
    expect(isPet({ ...validPet, category: { foo: 'bar' } })).toBeTruthy();
  }));

  test('invalid Pet is not Pet', inject([], () => {
    expect(isPet({ ...validPet, id: '42' })).toBeFalsy();
  }));

  test('Tag is valid Tag', inject([], () => {
    expect(isTag({})).toBeTruthy();
    expect(isTag({ id: 42 })).toBeTruthy();
    expect(isTag({ id: 42, name: 'foo' })).toBeTruthy();
  }));

  test('Customer is valid Customer', inject([], () => {
    expect(
      isCustomer({ right: Right.READ_WRITE, position: Position.Third }),
    ).toBeTruthy();
    expect(isCustomer(validCustomer)).toBeTruthy();
  }));

  test('invalid Customer is not Customer', inject([], () => {
    expect(isCustomer({})).toBeFalsy();
    expect(isCustomer({ right: Right.READ_WRITE })).toBeFalsy();
    expect(isCustomer({ ...validCustomer, name: 42 })).toBeFalsy();
    expect(isCustomer({ ...validCustomer, email: 42 })).toBeFalsy(); // test for interface extend
  }));

  test('null is not valid object', inject([], () => {
    expect(isTag(null)).toBeFalsy();
    expect(isTag(42)).toBeFalsy();
  }));

  test('primitive type is not valid object', inject([], () => {
    expect(isTag(42)).toBeFalsy();
    expect(isTag('foo')).toBeFalsy();
  }));
});
