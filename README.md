# React/Context API 

A web application which generates and prints a CV using user entered data. Features controlled forms, Hooks and is served by a Context API global state management solution. Prints out a copy of the user's entered information (though with minimal styling). There's lots of solutions out there with endless customisation, the idea is to create a clean CV quickly and with little fuss.

## Lessons Learned

My first real React project (after putting the mandatory to do list together) - started off using scattered pieces of state in class based components, eventually decided to go away and learn Context API and Hooks to provide a more global place to store the app's info. Didn't have to get far into making an app before I started really appreciating how much cleaner state management solutions are.

First experience of using Hooks, can definitely see why people are doing away with class based components - removes the hassle of binding to this and being able to pass the setState method as props makes updating global state a lot easier.

Learned how to print a specified div from a JavaScript application - found a solution in the end, but not really happy with the outcome because it kills most of the styling. Will revisit this when I've learned more about node.js, it looks like [Pupetteer](https://github.com/puppeteer/puppeteer) would allow me to do this nicely.

Actually got a really good grasp of array methods from using this project (like map, filter, reduce) - one of the main reasons I like working with React is because it does make you a better JavaScript developer overall.

## Potential Future Features

- Running a server with Puppetteer to generate and print off a styled copy of the CV

- Add a colour picker so that the user can, to some extent, customise the styling of the final CV - don't want to go too crazy with customization as the idea is to create something presentable to employers quickly

## Deployment

Deployed with [github pages](https://pages.github.com/).

## Get started

From your command line, first clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/rgneville/cv-app

# Go into the repository
$ cd cv-app

# Remove current origin repository
$ git remote remove origin
```
Then you can install the dependencies using NPM:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```
You should now have a development server running in your default browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


