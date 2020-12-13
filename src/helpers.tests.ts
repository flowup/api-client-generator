import { removeDuplicateWords, toCamelCase, unicodeEscape } from './helper';

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

  it('should convert spaces separators to camelCase', () => {
    expect(toCamelCase('some service')).toEqual('someService');
    expect(toCamelCase('text   with lot of spaces')).toEqual(
      'textWithLotOfSpaces',
    );
  });

  it('should not mess with the dollar sign', () => {
    expect(toCamelCase('$Xgafv')).toEqual('$Xgafv');
    expect(toCamelCase('$value')).toEqual('$value');
  });

  it('should convert to camelCase and capitalize firs letter', () => {
    expect(toCamelCase('my-awesome.model', false)).toEqual('MyAwesomeModel');
  });
});

describe('[helpers] to escape unicode chars', () => {
  it('should escape non unicode characters in string', () => {
    expect(
      unicodeEscape('simplified Chinese: 汉字; traditional Chinese: 漢字'),
    ).toEqual(
      'simplified Chinese: \\u6c49\\u5b57; traditional Chinese: \\u6f22\\u5b57',
    );
    expect(unicodeEscape('Cyrillic: А, Б, В, Г')).toEqual(
      'Cyrillic: \\u0410, \\u0411, \\u0412, \\u0413',
    );
    expect(unicodeEscape('Archaic Latin: 𐌀, 𐌁, 𐌂, 𐌃')).toEqual(
      'Archaic Latin: \\ud800\\udf00, \\ud800\\udf01, \\ud800\\udf02, \\ud800\\udf03',
    );
    expect(unicodeEscape('Greek: α, β, γ, δ')).toEqual(
      'Greek: \\u03b1, \\u03b2, \\u03b3, \\u03b4',
    );
    expect(unicodeEscape('Emoji: 😁, 😂, 😷, 😅')).toEqual(
      'Emoji: \\ud83d\\ude01, \\ud83d\\ude02, \\ud83d\\ude37, \\ud83d\\ude05',
    );
  });

  it('should not escape any unicode characters', () => {
    expect(unicodeEscape('some string')).toEqual('some string');
    expect(unicodeEscape('some\tstring\nmultiline')).toEqual(
      'some\tstring\nmultiline',
    );
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
