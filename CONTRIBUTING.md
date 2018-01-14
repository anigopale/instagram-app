# Contributing to InstaApp
Go through the following set of guidelines if you wish to contribute to the project hosted in [anigopale/instagram-app](https://github.com/anigopale/instagram-app) on GitHub.

## Style guide

### Git commit messages
* use present tense(``add feature`` not ``added feature``)

### JavaScript

#### strings
* use template literals(back-ticks) instead of concatenation

```
//bad
function showNum(number) {
  return 'number is ' + number + '.';
}

//good
function showNum(number) {
  return `number is ${number}.`;
}
```



#### whitespace
* Use tab set to 2 spaces

```
//bad
function foo() {
....return;
}

//good
function foo() {
..return;
}
```
#### React

* boilerplate for reactjs components

```
//bad
import React from 'react';

class Bar extends React.Component {
  render() {
    //return
  }
}

export default Bar;

//good
import React, { Component } from 'react';

export default class Bar extends Component {
  render() {
    //return
  }
}
```
