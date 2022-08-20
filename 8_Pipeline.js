// As part of a data processing pipeline, complete the implementation of the pipeline function:

// The pipeline function should accept a variable number of functions, and it should return a new function that accepts one parameter arg.
// The returned function should call the first function in the pipeline with the parameter arg, and call the second function with the result of the first function.
// The returned function should continue calling each function in the pipeline in order, following the same pattern, and return the value from the last function.
// For example, pipeline(x => x * 3, x => x + 1, x => x / 2) then calling the returned function with 3 should return 5.0.

function pipeline(...funcs) {
    return (args) => {
      // Your code goes here
      return funcs.reduce((arg, fn)=>fn(arg),args)//args is the initial value (3)
    }
  }
  
  let fun = pipeline(x => x * 3, x => x + 1, x => x / 2);
  console.log(fun(3)); // Should print 5