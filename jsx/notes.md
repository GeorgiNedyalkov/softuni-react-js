# Introduction to React and JXS

## **JSX**

- What is JSX?

JSX is a syntax extension(superset) to Javascript. It is like a templating engine but with the full power of javascript.
We used in react to describe what the UI should look like.

JSX produces React "elements".

Example:

```jsx
const title = <h1>Hello word!</h1>;

const name = "Georgi";

const greeting = <h2>How are you doing? {name}</h2>;
```

Any javascript code can be implemented between the {}.
This is how the UI is combined with the logic.

- Why JSX?

Rendering logic is inherently coupled with other UI logic:
How events are handled? How the state changes over time? and how data is prepared for display.

This is why instead of separating javascript and markup files in separate files. React uses JSX to couple them in a single file called a component.
The separation of concerns comes from combining each component to from the entire layout of the application.

It is recommended to always wrap JSX between parenthesis to avoid automatic semicolon insertion.

JSX code is transpiled by babel and turns it into javascript code. This means that we can use `if` and `for` loops, assing variables, accept as arguments, etc.

We may use quotes to specify string literals as attributes.
Curly braces can also be user to embed a javascript expression in an attribute. Be carefull not to wrap the expression with quotes when embedding in an attribute.
Use either string literals or expressions but not both.

Since JSX is closer to javascript than to html. The convention for attributes is to
use camelCase: class becomes className etc.

An empty tag can be closed immediately.

JSX tags may contain children.

JSX Prevents Injection Attacks

It is safe to embed user input in JSX. React DOM escapes any values embedded in JSX
before rendering them. Thus it ensures than you can never inject anything that's not
explicitly written in the application.

Everything is converted to a string before being rendered. This helps prevent
XSS (cross-site-scripting) attacks.

TODO: _research cross site scripting_

## **Virtual DOM and DOM Tree**

- What is the Virtual DOM?

The virtual dom is a lightweight representation of the DOM tree.

A Virtual Dom element is significantly lighter in terms of functionality and parameters compared to a regular dom element.

---

Every re-render the virtual dom checks to see where if there are changes in the dom and updates only those changes.

---

DOM Tree has DOM elements.
React Tree called Virtual Dom has react elements.
