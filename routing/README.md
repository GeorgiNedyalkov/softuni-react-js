# Virtual DOM and Routing

## Virtual DOM

The Virtual DOM is a representation of the DOM tree or the UI is kept in memory.
The VDOM is synched with the "real" DOM using the library ReactDOM.
This process is called _reconcialiation_.

The VDOM makes the smallest possible change to the DOM. On change _diffing algorithm_ is applied.

The VDOM is what enables the declarative API of React.

We specify what UI we want React to render, and React makes sure the DOM matches that state.
This abstracts, attribute manipulation, event handling, and manual DOM updating.

The virtual dom is usually associated with _React Elements_. They are the repesentation of the user interface.

React also uses internal objects called "fibers" to hold additional information about the component tree. They are also considered a part of "Virtual DOM" implementation of React.

answer to: [What is the VDOM and why is it beneficial?](https://stackoverflow.com/questions/21965738/what-is-virtual-dom)

React creates a tree of custom objects representing a part of the DOM. For example, instead of creating an actual DIV element containing a UL element, it creates a React.div object that contains a React.ul object. It can manipulate these objects very quickly without actually touching the real DOM or going through the DOM API. Then, when it renders a component, it uses this virtual DOM to figure out what it needs to do with the real DOM to get the two trees to match.

You can think of the virtual DOM like a blueprint. It contains all the details needed to construct the DOM, but because it doesn't require all the heavyweight parts that go into a real DOM, it can be created and changed much more easily.

## DOM

The Document Object Model.

## Routing

Navigation for Single Page Apps.

Client-side routing is internal handling of a route. It allows navigation, without a full reloading of the page. Loading only the initial HTML, CSS and JS. Gives better UX.

A Router loads the correct conent when the location changes.

## useParams, useNavigate

## Nested Routes
