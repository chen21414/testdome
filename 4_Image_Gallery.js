// An image gallery is a set of images with corresponding remove buttons.
// This is the HTML code for a gallery with two images:

{
  /* <div class="image">
  <img src="https://bit.ly/3lmYVna" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://bit.ly/3flyaMj" alt="Second">
  <button class="remove">X</button>
</div> */
}
{
  /* Implement the setup function that registers a click event handler and implements the following logic: When the button of class remove is clicked, its parent <div> element should be removed from the gallery.

For example, after the first image has been removed from the gallery above, it's HTML code should look like this: */
}

{
  /* <div class="image">
  <img src="https://bit.ly/3flyaMj" alt="Second">
  <button class="remove">X</button>
</div> */
}

function setup() {
  // Write your code here.
  var els = document.getElementsByClassName("remove");
  for (var i = 0; i < els.length; i++) {
    els[i].addEventListener("click", function (e) {
      e.preventDefault();
      e.target.closest("div.image").remove();
    });
  }
}

//in react:
//https://stackoverflow.com/questions/61088226/remove-an-item-on-clicking-using-reactjs
class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: props.links };
  }
  remove = (index) => {
    var list = this.state.links;
    list.splice(index, 1);
    this.setState({ links: list });
  };

  render() {
    return (
      <div>
        {this.state.links.map((item, index) => {
          return (
            <div key={item} className="image">
              <img key={index} src={item} alt="" />
              <button className="remove" onClick={() => this.remove(index)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
const links = ["www.goo.gl/kjzfbE", "www.goo.gl/d2JncW"];
ReactDOM.render(<ImageGallery links={links} />, rootElement);
document.querySelectorAll(".remove")[0].click();
console.log(rootElement.innerHTML);
