const food = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Jerk Chicken!!")
  }, 2000)
})

// resolve food here:

// **Challenge 1** Resolve your promise with the name of your favorite food.
// Do this by calling the `resolve` with an argument.

// **Challenge 2** Resolve the `food` promise with that `.then()` syntax
// and print your favorite food to the console.

food.then((food) => console.log(food))
