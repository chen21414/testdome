// Implement the ensure function so that it throws an error if called without arguments or the argument is undefined.
// Otherwise it should return the given value.

function ensure(value) {
  // Your code goes here
  if (value === undefined) {
    throw new Error("no arguments");
  }

  //or otherwise
  return value;
}

try {
  console.log(ensure("text"));
} catch (err) {
  console.log(err);
}
