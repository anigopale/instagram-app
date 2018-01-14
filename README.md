# Instagram app(InstaApp)

InstaApp is a simple app that allows users to search for [instagram](https://www.instagram.com/developer/) hash tags and tagged media.

### Demo
[demo](https://ani-insta-app.herokuapp.com)

### Prerequisites
* [git](https://git-scm.com/)
* [npm](https://www.npmjs.com/get-npm)
* [your Instagram app's CLIENT_ID](https://www.instagram.com/developer/)

### installation
Clone the project repository and install npm packages

```
$ git clone https://github.com/anigopale/instagram-app.git
$ cd instagram-app
$ npm install
```
You need to export your ``CLIENT_ID`` from ``./src/assets/client_id.js``, like so:
```
export const CLIENT_ID = your-client-id;
```

### Usage
Run the start script and navigate to ``localhost:3000`` in your browser.
```
npm run start
```
### Contributing
Want to contribute? See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

### License
[MIT](LICENSE)
