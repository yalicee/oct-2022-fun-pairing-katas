const sumDigits = require('../katas/sum-digits');

describe('sumDigits', () => {
  test('Returns input number when passed single digit number', () => {
    const input = 1;
    const expectedOutput = 1;
    const actualOutput = sumDigits(input);
    expect(actualOutput).toBe(expectedOutput);

    // We can write two expect statements in one it-block if we want to check different examples!
    // This it-block will fail if any of the expect statements fail
    const input2 = 9;
    const expectedOutput2 = 9;
    const actualOutput2 = sumDigits(input2);
    expect(actualOutput2).toBe(expectedOutput2);
  });

  /*
  Once you have got the first test passing, then you can write your next one.
  If you've already handled a single digit, your next test could test for multi-digit inputs.

  E.g. sumDigits(99) should output 18
  E.g. sumDigits(123) should output 6

  HINT: Remember to see the test *fail* first, then write the code to pass the test

  Why this test?  
  A multi-digit input means you now have to implement to 'addition' part of this function,
  but you don't have to think about the logic for dealing with/ignoring non-digit characters yet
  (that's for our next test!)
  */

  /*
  Once you have successfully passed the above test, then you can write your next test.
  A good next test might be to check that your function handles non-numerical characters correctly (i.e. ignores them)
  
  E.g. sumDigits(10.5) should output 6
  */
});
