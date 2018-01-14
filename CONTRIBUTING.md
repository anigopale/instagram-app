# Contributing to InstaApp
Go through the following set of guidelines if you wish to contribute to the project hosted in [anigopale/instagram-app](https://github.com/anigopale/instagram-app) on GitHub.

## Style guide

### Git commit messages
* use present tense

```
//bad
$ git commit -m "added feature"

//good
$ git commit -m "add feature"
```

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
* place 1 space before opening parenthesis

```
//bad
if (true){
  return true;
}

//good
if(true) {
  return true;
}

//bad
function foo(){
  return;
}

//good
function foo() {
  return;
}
```

#### React

* Use the following boilerplate for creating react(only) components

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
