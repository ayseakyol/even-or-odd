# Even of Odd: development strategy

Building this site one step at a time

## 0. Setup

- `index.html` and folder structure with empty files

## 1. Data & Log

- `data/strings.js` & `log.js`

## 2. Init (not finished!)

- The code in `init.js` that renders the current list for users is complete.
  - But the `renderList` DOM Component function is not! you will need to write this: I added newDiv bottom the 'selected' div which is already in the HTML.
    Users can see the H4 tag with the name of groups bottom the newDiv. The newDiv has also second child(ul:li) to show currentArray. To write the currentArray[items] in innerHTML I used for loop.
- `index.html` is complete, just waiting for the code behind it

## 3. User Story: `reset` (completed for you)

- A user can reset stat & see a cleared User Interface
- I wrote the code in `listeners/reset.js` & `handlers/reset.js`
- The handler function resets the `strings` object to it's initial values (the values in the source code), and re-renders the same UI as `init.js`. in `listeners/reset.js` the handler is connected to the UI with a `click` event.

## 4. User Story: Save\Listeners\Handlers

> - A user can group his inputs as evens-odds or nanys and push them to their strings. Also these values are already exist this function prevents saving again same values.
> - I wrote the code in `listeners/save.js` & `handlers/save.js`
> - The handler function save the inputs, push them to their strings and prevent saving same values. In `listeners/save.js` the handler is connected to the UI with a `click` event.

## 5. User Story: Evens\Listeners\Handlers

> - A user can select even numbers.
> - I wrote the code in `listeners/display-evens.js` & `handlers/display-evens.js`
> - The handler function display the evens bottom of the 'strings.evens' with the help of 'renderList' function. In `listeners/display-evens.js` the handler is connected to the UI with a `click` event.

## 6. User Story: Odds\Listeners\Handlers

> - A user can select odds numbers.
> - I wrote the code in `listeners/display-odds.js` & `handlers/display-odds.js`
> - The handler function display the odds bottom of the 'strings.odds' with the help of 'renderList' function. In `listeners/display-odds.js` the handler is connected to the UI with a `click` event.

## 7. User Story: Nany\Listeners\Handlers

> - A user can select 'not numbers'.
> - I wrote the code in `listeners/display-nany.js` & `handlers/display-nany.js`
> - The handler function display the 'not numbers' bottom of the 'strings.NaNy' with the help of 'renderList' function. In `listeners/display-nany.js` the handler is connected to the UI with a `click` event.
