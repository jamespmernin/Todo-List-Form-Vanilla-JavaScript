# Dom Manipulation Redux

#### The Humble Text Input

Mouse (and other various) keyboard events are a good first attempt to process user interactions and update the DOM in process, but there are many more and potentially richer methods at our disposal.  _Input_ tags are one of these methods.

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

Let's write up a form with a text input and a button:

- Create a ```<form></form>``` element.
	- All form attributes are optional. You can build a form without the ```<form>``` tag just using ```inputs``` and ```buttons``` but you won't have access to some features specifically designed for ```forms```.
	- The `action` attribute defines the location (URL) where the form's collected data should be sent when it is submitted. This is the built-in attribute that causes forms to reload a page, and the reason we often have to use ```preventDefault()``` when submitting data. If you decide to build a form without using ```<form>``` tags then you won't need ```preventDefault()``` later on. 

- Add a text input to the html: `<input />`. Notice how this tag is self closing.
	- ```inputs``` have have a ```type``` attribute. The most common is ```text```.
	- The ```value``` attribute keeps track of the content (or state) inside the input field. This will be very important later.
	- ```autoFocus``` is an attribute that can be added to force focus to this specific input when the page loads.
	- The ```autoComplete``` attribute can be set to 'on' or 'off', though it is 'on' by default. When it is 'on,' it will remember and suggest entries previously entered as the input value.
- Add a ```<button></button>```
	- Inside a form, a ```button``` and an ```<input type='submit'>``` can be used almost interchangeably. If you use a submit input for this exercise, be sure to assign it a specific class or ID so we can destinguish between inputs later on with JavaScript.
- For good measure, let's create a ```<section>``` tag. This is where our to-do list will be rendered, so let's give it a class name 'todo-list'

Now let's jump into the our JS file:

- Query select for all of the elements we just created (remember, if you used a submit input instead of a button, you'll need to grab your inputs by ID or class, not by tag name).


#### List Some Todos

Begin by initializing an empty array and storing it as a variable. This array will eventually contain a set of strings that represent each item on our to-do list.

Now write a function (using whatever syntax you like) that uses a loop to display the items from our array inside the ```section``` tag we created in our HTML.
	- You can utilize ```<ul>``` and ```<li>``` tags for a list, but to simplify for this exercise, we're just going to create each item as a ```<p>``` tag.

To test that this function works, let's hardcode some to-do items into our array and call the function. We should see each item from the array printed out in the browser.

#### Add a Todo

Register a click event listener on the ```button``` or ```submit```. This click needs to call a function that should:
- extract the value of the text input
- add the value to the `todos` array
- call the the function that loops through our array and prints them out.

Uh oh, you may have some duplicates!

- In the looping function, add a command that resets the ```innerHTML``` of our ```<section>``` to an empty string before it loops and prints.
- For good measure let's reset the value of our text input on the click event function as well.

If we've done this correctly, all items we enter into the input field should be printed to our list!

#### Bonus

Try to add an additional button for deleting a Todo.

After that, can you think of a way to _edit_ an existing Todo?
