const middleChar = require("../katas/middle-char");
const { expect } = require("chai");

describe("middleChar", () => {
  it("returns empty string when passed an empty string", () => {
    const input = "";
    const expectedOutput = "";
    const actualOutput = middleChar(input);
    expect(actualOutput).to.equal(expectedOutput);
  });
  /*
  Once you have got the first test passing, then you can write your next one.
  A good next test might be to check that your function returns the whole input if input length is less than 3:

  E.g. middleChar('a') should output 'a'
  E.g. middleChar('ab') should output 'ab'
  */

  /*
  Once you have got that test passing, then you can write your next one.
  A good next test might be to check that your function returns the single middle character when passed an odd-length string:

  E.g. middleChar('pig') should output 'i'
  */

  /*
  Once you have got the first test passing, then you can write your next one.
  A good next test might be to check that your function returns the two middle characters when passed an even-length string:

  E.g. middleChar('goat') should output 'oa'
  */

  /*
  Once you have got the first test passing, then you can write your next one.
  A good next test might be to check that your function returns correct characters, ignoring whitespace:

  E.g. middleChar('hello world') should output 'ow'
  */

  /*
  Once you have got the first test passing, then you can write your next one.
  A good next test might be to check that your function returns correct characters, ignoring special characters:

  E.g. middleChar('Northcoders!!') should output 'c'
  */
});
