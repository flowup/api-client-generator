import { removeDuplicateWords, toCamelCase } from './helper';

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
