import { removeDuplicateWords, toCamelCase, toTypescriptType } from './helper';

describe('[helpers] to camelCase', () => {
  it('should convert dash to camelCase', () => {
    expect(toCamelCase('some-service')).toEqual('someService');
    expect(toCamelCase('some-really-long-service')).toEqual(
      'someReallyLongService',
    );
    expect(toCamelCase('a42-wololo')).toEqual('a42Wololo');
    expect(toCamelCase('--param')).toEqual('param');
  });

  it('should convert some separators to camelCase', () => {
    expect(toCamelCase('folder/some_really-long.service')).toEqual(
      'folderSomeReallyLongService',
    );
  });

  it('should convert to camelCase and capitalize firs letter', () => {
    expect(toCamelCase('my-awesome.model', false)).toEqual('MyAwesomeModel');
  });
});

describe('[helpers] remove duplicate words', () => {
  it('should remove duplicates in sentence', () => {
    expect(removeDuplicateWords('modelmodel')).toEqual('model');
    expect(removeDuplicateWords('UserModelModel')).toEqual('UserModel');
    expect(removeDuplicateWords('shipmentShipmentAddress')).toEqual(
      'ShipmentAddress',
    );

    // It shouldn't remove duplicates with less than 4 letters
    expect(removeDuplicateWords('idWololoID')).toEqual('idWololoID');
    expect(removeDuplicateWords('UrlichUrl')).toEqual('UrlichUrl');
  });
});

describe('[helpers] determine TS type', () => {
  it('should detect build-in types', () => {
    expect(toTypescriptType('integer')).toEqual('number');
    expect(toTypescriptType('Integer')).toEqual('number');
    expect(toTypescriptType('double')).toEqual('number');
    expect(toTypescriptType('number')).toEqual('number');

    expect(toTypescriptType('string')).toEqual('string');
    expect(toTypescriptType('boolean')).toEqual('boolean');
    expect(toTypescriptType('Boolean')).toEqual('boolean');
    expect(toTypescriptType('object')).toEqual('object');
    expect(toTypescriptType('Object')).toEqual('object');
    expect(toTypescriptType('array')).toEqual('any[]');
    expect(toTypescriptType('Array')).toEqual('any[]');
  });

  it('should NOT replace type by build-in types', () => {
    expect(toTypescriptType('modelInteger')).toEqual('ModelInteger');
    expect(toTypescriptType('MyString')).toEqual('MyString');
    expect(toTypescriptType('stringValue')).toEqual('StringValue');
    expect(toTypescriptType('Bool')).toEqual('Bool');
  });
});
