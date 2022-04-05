function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === "string") {
        resolve("hello " + name)
      } else {
        reject("Name must be a string!")
      }
    }, 1000)
  })
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof str === "string") {
        resolve(str.toUpperCase())
      } else {
        reject("Argument to uppercaser must be string")
      }
    }, 1000)
  })
}

// Above we have two functions that returns promises.
// These are greet and uppercaser.
// Notice how we chain these promises together. The
// Result of one is then passed to the next.

greet("Xila") // Returns a Promise
  .then((str) => uppercaser(str)) // Upper case the results from greet() Returns a Promise
  .then((str) => console.log(str)) // Log the results of uppercaser()
  .catch((err) => console.log(err)) // Catches an error

// Challenges: get greet() to fail by passing a non string value
// What happens?

greet(2)
  .then((str) => console.log(str))
  .catch((err) => console.log(err))

// Challenge: get uppercaser() to fail by passing a non string value
// What happens?

uppercaser(5).catch((error) => console.log(error))

// Challenge: Notice there is only a single .catch() at the end.
// Explain the behavior?

// There is only a single catch at the end because it catches for both of the functions becuase there chained together.
// also there is one input
