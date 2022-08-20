// Loop
// Function appendChildren should add a new child div to each existing div. New divs should be decorated by calling decorateDiv.

// For example, after appendChildren is executed, the following divs:

// <div id="a">
//   <div id="b">
//   </div>
// </div>
// should take the following form (assuming decorateDiv does nothing):

// <div id="a">
//   <div id="b">
//     <div></div>
//   </div>
//   <div></div>
// </div>


//original code
function appendChildren(decorateDiv) {
    var allDivs = document.getElementsByTagName("div");
  
    for (var i = 0; i < allDivs.length; i++) {
      var newDiv = document.createElement("div");
      decorateDiv(newDiv);
      allDivs[i].appendChild(newDiv);
    }
  }


//solution
function appendChildren(decorateDiv) {
    var allDivs = document.getElementsByTagName("div");
    allDivs = [].slice.call(allDivs, 0);
    //https://stackoverflow.com/questions/2125714/explanation-of-slice-call-in-javascript
    //https://shifteleven.com/articles/2007/06/28/array-like-objects-in-javascript/

    // slice
    // this extracts a section of an array and returns a new array, and without a beginning and ending index, it simply returns a copy of the array
    // call
    // this is a very useful function, it allows you to call a function from one object and use it in the context of another
  
    for (var i = 0; i < allDivs.length; i++) {
      var newDiv = document.createElement("div");
      decorateDiv(newDiv);
      allDivs[i].appendChild(newDiv);
    }
  }
  

// What's happening here is that you call slice() as if it was a function of NodeList using call(). What slice() does in this case is create an empty array, 
// then iterate through the object it's running on (originally an array, now a NodeList) and keep appending the elements of that object to the empty array it created, 
// which is eventually returned. Here's an article on this.

// EDIT:

// So it starts with an empty array [], then slice is used to convert the result of call to a new array yeah?

// That's not right. [].slice returns a function object. 
// A function object has a function call() which calls the function assigning the first parameter of the call() to this; 
// in other words, making the function think that it's being called from the parameter (the NodeList returned by document.querySelectorAll('a')) rather than from an array.



//explain:
var testFunction = function() {
    // Create a new array from the contents of arguments
    var args = Array.prototype.slice.call(arguments);
  
    var a = args.shift();
    console.log("The first argument is: %s", a); //"The first argument is: %s", "1"
  
    // send the remaining arguments to some other function
    //someOtherFunction(args);
  };
  
  testFunction("1", "2", "3")