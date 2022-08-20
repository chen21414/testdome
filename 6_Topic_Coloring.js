// Topic Coloring
// Write the function newMessage, which receives the name of the topic as the parameter. Function should change the background color of the p tag to red where the data-topic-name is topicName. A topicName that doesn't have a matching data-topic-name should be ignored.

// For example, if the HTML is:

// <div>
//   <p data-topic-name="discussion">General discussion</p>
//   <p data-topic-name="bugs">Bugs</p>
//   <p data-topic-name="animals">Animals</p>
// </div>
// After calling newMessage("discussion") the HTML should be:

// <div>
//   <p data-topic-name="discussion" style="background-color: red;">General discussion</p>
//   <p data-topic-name="bugs">Bugs</p>
//   <p data-topic-name="animals">Animals</p>
// </div>

function newMessage(topicName) {
    // Write your code here
     let elements = document.querySelectorAll(`[data-topic-name=${topicName}]`)
      elements.forEach(ele => ele.style.background ="red")
}