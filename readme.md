## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- **getElementById** → Finds only one element by its unique ID.  
- **getElementsByClassName** → Finds all elements with the same class name. It returns a HTMLCollection.  
- **querySelector** → Finds the first element that matches with id or class or tag.  
- **querySelectorAll** → Finds all elements that match with id or class or tag. It returns a NodeList.




## 2. How do you create and insert a new element into the DOM?

- First, create a element using **document.createElement()**.  
- Then, set text or attributes if needed.  
- Finally, add it to the page using **appendChild()**.




## 3. What is Event Bubbling and how does it work?

- Event bubbling means an event goes from the child element to its parent.  
- Example: If you click a button inside a div, first the button event runs, then the div event.  




## 4. What is Event Delegation in JavaScript? Why is it useful?

- Event delegation means adding event to the parent, not to every child.  
- The parent can find which child was clicked.  

**Usefulness**  
- Less code, less memory.  
- Works even if new child elements are added.  




## 5. Difference between preventDefault() and stopPropagation()

- **preventDefault()** → Stops the default action of an element.  
  - Example: Prevent page reloading when a user click on a form submitting button.  

- **stopPropagation()** → Stops the event from moving up to parent elements.  
  - Example: Click works only on the child, not on the parent.