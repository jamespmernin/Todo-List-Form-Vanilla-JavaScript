# Dom Manipulation Redux

#### The Humble Text Input

Mouse (and arbitrary) keyboard events are a good first attempt to process user interactions and update the DOM in process, but there are many more and potentially richer methods at our disposal.  _Input_ tags are one of these methods.

Perhaps the most commonly recognized is the "text" input:

```html
<input type="text" />
```

Notice that it is a self-closing tag.  It has no children or inner content exposed directly.  Text inputs manage the state of the text inside them automatically.  Forms can manage several inputs, text or others, using the `name` attribute on the element, but for now let's just extract the value of the input with javascript.

```js
const input = document.querySelector('input');
const value = input.value;
```

The `input` element returned by `querySelector` includes a `value` property that can either be read or updated:

```js
input.value = 'doggo';
console.log(input.value);
```

All we need is a button or click event to trigger some code to fetch the value out of the input and then perform a given action with it, e.g., creating a new element and appending it to the DOM.

##### Mini-Exercise

Let's write a text input and a button that inserts the input's value into the DOM and then resets the input:

- Add a text input to the html: `<input type="text" />`
- Add a ```<button>Add</button>``` or ```<input type="submit" />```
- In the JS file, query select for both elements
- Add a click event to the button that gets the value of the input using the `value` property
- Write another function, `updateHeader` that takes a single string as a parameter and updates the textContent of the `h1` with the string
- From the event handler, pass the value of the input as an argument to `updateHeader`

If all goes well you should be able to update the header with arbitrary text from the input + a button click

#### innerHTML for fun and profit

Setting the `textContent` of an element works for simple pieces of data, but what if we wanted to track a collection of items that might grow arbitrarily large?  In that case, storing the values in an array and then rendering them to the DOM could be a more maintanable strategy.

```html
<ul></ul>
<input type="text" />
<button>Add Doggo</button>
```

Given the markup above, we could add each submitted value from the input  to an array:

```js
const dogs = [];
const input = document.querySelector('input');
dogs.push(input.value);
```

and then render it to the `ul`

```js
const ul = document.querySelector('ul');
ul.innerHTML = '';

dogs.forEach((dog) => {
	const el = document.createElement('li');
	el.innerHTML = `
	The dog's name is: <span class="bold">${dog}</span>
	`;
	ul.append(el);
});
```

Notice that the `ul` is "reset" before rendering the list of dogs.  It's often convenient to zero out the content of an element then write a function to just render a collection rather than trying to manage adding/removing things directly with DOM manipulation.

Also, the ES6 "`" string allows the easy creation of splices of HTML with variable sub-strings using string interpolation.

### Lab Time

Another classic intro app to build is the To-Do List for managing tasks that you need to do so that they can become "to-done".

Typically, a user can add a task that is a "to-do", view a list of "to-dos", mark a "to-do" as "to-done" or delete it, and update a "to-do".  To start, let's just try to add a to-do and display the list of to-dos.

- Clone down this repo
- `cd` into the repo
- open the `index.html` in the browser
- open the project in VS Code with `code .`

#### List Some Todos
Begin by initializing an array of `todos` in `app.js` with a few hardcoded tasks that need to-doing.  It doesn't need to be inside of a function

Write a function `render` _beneath the definition of `todos`_, that renders each todo in the `todos` array to the DOM.  `forEach` will probably prove helpful here.

Test that this displays properly in the browser.

#### Add a Todo

Above the Todo List in html, add a text input and a button.  In `app.js` register a click event listener on the button that should:
- extract the value of the text input
- add the value to the `todos` array
- reset the value of the input to an empty string
- and finally, re-render the todos list so the newest todo is displayed in the list

#### Bonus

Try to add an additional button for deleting a Todo.

After that, can you think of a way to _edit_ an existing Todo?
