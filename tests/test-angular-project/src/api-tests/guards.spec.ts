import { inject } from '@angular/core/testing';
import {
  isCustomer,
  isInterfaceWithArrayOfDictionariesOfArrayOfRights,
  isInterfaceWithDictionary,
  isInterfaceWithSimpleDictionary,
  isPet,
  isTag,
} from '../api-no-tags/guards';
import {
  Customer,
  InterfaceWithArrayOfDictionariesOfArrayOfRights,
  InterfaceWithDictionary,
  InterfaceWithSimpleDictionary,
  Pet,
  Position,
  Right,
} from '../api-no-tags/models';

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

  test('interface property is a dictionary with non primitive type', inject(
    [],
    () => {
      const withDictionary = {
        id: 'id',
        customers: { xyz: validCustomer },
      } as InterfaceWithDictionary;
      expect(isInterfaceWithDictionary(withDictionary)).toBeTruthy();
    },
  ));

  test('interface property is a dictionary with primitive type', inject(
    [],
    () => {
      const withDictionary = {
        foo: { xyz: 42, bar: 1337 },
      } as InterfaceWithSimpleDictionary;
      expect(isInterfaceWithSimpleDictionary(withDictionary)).toBeTruthy();
    },
  ));

  test('interface property is a dictionary array of non primitive arrays', inject(
    [],
    () => {
      const withDictionary: InterfaceWithArrayOfDictionariesOfArrayOfRights = {
        rightCollections: [
          {
            user: [Right.VIEW_MY],
            admin: [Right.ADMIN, Right.VIEW_ALL, Right.VIEW_EDIT],
          },
          {
            user: [Right.VIEW_MY],
            admin: [Right.ADMIN, Right.VIEW_ALL],
            editor: [Right.VIEW_EDIT],
          },
        ],
      };
      expect(
        isInterfaceWithArrayOfDictionariesOfArrayOfRights(withDictionary),
      ).toBeTruthy();
    },
  ));
});
