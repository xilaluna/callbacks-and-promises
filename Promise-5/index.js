function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeOfDay === "breakfast") {
        resolve("French Toast 🍞")
      } else if (timeOfDay === "lunch") {
        resolve("Turkey Sandwhich 🥪")
      } else if (timeOfDay === "dinner") {
        resolve("Jerk Chicken 🍗")
      } else {
        reject("I'm not hungry right now.")
      }
    }, 2000)
  })
}

// Call yout function and resolve the promise here!
whatToEat("breakfast").then((food) => console.log(food))
whatToEat("lunch").then((food) => console.log(food))
whatToEat("dinner").then((food) => console.log(food))
whatToEat("7:00").catch((error) => console.log(error))

// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner'
// resolve the promise with your favorite food for that time.

// If the `timeOfDay` is anything else reject the promise with
// the 'message' I'm not hungry right now.
