# Pairing Katas

Welcome to your first day of Pairing Katas, and your first sprint!

Check out `set-up.md` to get started. If you're on GitHub, there's a link to it above here. If you're on VSCode, find it in the Explorer to the left.

The purpose of these exercises is to practice your TDD skills and to adjust to the idea of properly pair programming.

In your pairs, take turns being driver and navigator. Use git and the command line to handle sharing your repo, and switch to your machine when you switch drivers.

The goal of your tests in to ensure your functions return the correct output when given a range of inputs.

The most important thing to test is that your function functions in the way it should! When you are confident that your function behaves as any reasonable user would expect it to, you should consider **edge cases** where the function may have to deal with extreme, unexpected, unusual or incorrect inputs - but focus on the _'happy path'_ first!

You are testing **'interfaces not implementations'** - you care only about what your function returns when given some input. You should not try to test what exactly is happening inside the function or that people are using it in the correct way, just test that it returns the correct results for a range of different inputs.

## Pairing katas tasks

1. Make sure that you are in the main directory for the repo (the one containing the `package.json`)
2. Run `npm install` to get necessary testing dependencies
3. In your katas folder you will find a `*.js` file for each problem that needs solving. You can write your solution code here.
4. Each kata also has `*.spec.js` file associated with it, in the spec folder. You can write tests for your code here! Uncomment the first line to access the functions you have written.
5. Run `npm test` to run every test in your `spec` folder. Whenever you get one or two tests done, swap your pair roles!
6. Below is a suggested order in which to do the katas, but it isn't compulsory. We'd recommend starting with `sumDigits` and `middleChar` as we have provided ideas for tests for these two, but otherwise feel free to pick any you like the sound of!

- sumDigits (_we've provided some ideas for tests for this one_)
- middleChar (_we've provided some ideas for tests for this one too_)
- vegCounter
- alternateCase
- getCentury
- areOrdered
- orderVeg
- checkUsernames
- maxAndMin
- sumArgs
- range
- removeDuplicates
- sumAscii
- mergeArrays
- checkStudents
- getYearsOfGrowth
- getDistinctLetters
- getFrequencies
- getMostRepeated
- lengthenDate
- caesarCipher

## Resources

If you'd like a primer on Test Driven Development, read [this blog post by Eric Elliott](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d).

[What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)

[Using a package.json basics](https://docs.npmjs.com/getting-started/using-a-package.json)

[What is in a package.json file](https://docs.npmjs.com/files/package.json)

[Mocha docs](https://mochajs.org/)

[Chai Documentation](http://chaijs.com/api/bdd/)
