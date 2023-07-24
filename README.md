![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React Native Context Api

## Learning goals

Upon completion of this exercise, you will be able to:

- Understand React Native Context API: Grasp the fundamentals of Context API for state management in React Native.
- Implement Global State Management: Set up and manage global state variables without prop drilling.
- Optimize Component Hierarchies: Organize components efficiently by sharing data using Context.
- Handle Complex State: Manage complex states, like user authentication or theme settings, effectively.
- Combine Context with React Native Features: Integrate Context with Hooks and Navigation for feature-rich apps.

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:

```shell
git add .
git commit -m "done"
git push origin master
```

Create Pull Request so your TAs can check up your work.

## Instructions

You will be provided with the application the application barebones and styles that you see below:

![](https://i.giphy.com/media/BEgTG7inq0WCLrxH8U/giphy.webp)

<video src="ctx.mp4" controls title="Title"></video>

Your task is going to be complement the code with the necessary pieces to use a global state to access properties and methods in the different components we have.

Let's do this!

:muscle: :muscle: :muscle:

<br>

### Iteration 1: Context

Your first itereation consists on:

1. Creating the context object.
2. Creating the Context provider component.
3. Passing any value into the components.
4. Wrap the application with the Context provider component.
5. Verify if you can consume context data from the children components.

### Iteration 2: Implement `useReducer`

On this iteration, more configuration for the project is needed. In this case, we're going to need for you to develop the necessary code to implement a reducer based state for the context value.

You'll need to:

1. Create the `state` and `dispatch` resources by using the `useReducer` hook.
2. Implement a reducer for the actions we're going to perform on this lab. Be sure to use the action type structure.
3. Create an action for the `addToCart`, and `removeFromCart` features.
4. Create the necessary logic here to allow users add elements to the cart.
5. If an element alraedy exists on the cart the button should turn red and it should say "Remove".
6. Create the necessary logic for the users to be able to remove elements from the cart.

### Iteration 3: Implement the `addToCart` and `RemoveFromCart` features.

In this iteration you'll need to actually implement what you built on the previous iterations. This consists on:

1. Implement the `AddToCart` functionality by dispatch the action when a user press any of the buttons from the list elements.
2. Check the state, if an element on the list is already on the cart, we should change the button to say "Remove".
3. Implement the `RemoveFromCart` functionality by dispatch the action when a user press any of the buttons from the list elements that says "Remove".

### Iteration 4: Update the total

In this iteration you'll have to consume the context on the `Footer` component and update the total text, so it shows the total value of all the elements on the cart.

### Bonus

#### Bonus iteration

In this iteration, you're challenged to show the list of all the elements in the cart whenever someone press the "Cart" button on the footer. This should make the Catalog list stop being rendered and render a list only with the elements on the cart. So you'll need to:

1. Add a property on the context state to know if we need to `showCart` or not.
2. Add a method to `toggleCart` so we can switch between the `Catalog` and the `Cart`.
3. Extract the `Catalog` from the `Content` component into its own file.
4. Create the `Cart` component that only renders elements from the cart.
5. Apply the functionality to the "Cart" button on the `Footer` to actually toggle between the `Cart` and the `Catalog`.
6. Be sure you can still remove elements from the `Cart` component.

<br>

**Happy coding!** :heart:
