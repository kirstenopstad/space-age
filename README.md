# Space Age

#### By Kirsten Opstad

#### An application that determines a user's age based on a planet's solar years

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* webpack
* Node.js

## Description

### Objectives (MVP)

The business logic of your application should take a person's age in years and create a class that does the following:

* Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
* Returns their age in Venus years. (A Venus year is .62 Earth years.)
* Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
* Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
* Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. The number of years lived past life expectancy should be a positive number.

Follow a commit workflow to demonstrate your understanding of the Red, Green, Refactor workflow. Make sure that you:

* Commit each test after you have written it and before writing the corresponding method in your business logic. This is the Red phase.
* Then, write the business logic that corresponds to the test, verify that your test passes, and then commit your code. This is the Green phase.
* Refactor your code base and tests as necessary.
* At the end of your work session, verify that you have 100% coverage on all tests.

<!-- This template includes placeholders for:

[x] Screenshots

![Screenshots](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.03bZmDGXaBhBYyxxp3Ls3gHaEA%26pid%3DApi&f=1&ipt=e980d57210242747a51c41421e1f09a6de3b1fdaeaadd297496787bb64e80c88&ipo=images) -->

[Link to operational site!](https://kirstenopstad.github.io/space-age/)

### Goals
1. Meet project MVP requirements.
2. Add a UI to the application.
3. Add functionality to return the date of a user's next birthday on each planet.

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* In the root directory of the project, run this command to install all packages listed in the package.json:
```
$ npm install
```
* Then, to build and serve the project, run: 
```
$ npm run start
```
* To run tests with Jest, run:
```
$ npm run test
```

## Known Bugs

* No known bugs. If you find one, please email me at kirsten.opstad@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## License

MIT License

Copyright (c) 2022 Kirsten Opstad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
