import {Component} from "react";
import "./style.css"
class As1 extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }
    handleChange = (event) => {
        let word = event.target.value;
        if (word === "") { //Checks empty string as well, to make sure the value of word count becomes 0 on deleting the text entered.
          this.setState({
            count: 0, //Returns 0 if no text is there
          });
        } else {
          var arr = word.trim().split(/\s+/);
          this.setState({
            count: arr.length,
          });
        }
      }      
    render(){
        return(
<div class="a1">
    <h1>Responsive Paragraph Word Counter - 21BCE8562</h1>
    <textarea placeholder="Enter text to see it's word count" onChange={this.handleChange}></textarea>
    <p>Word Count:{this.state.count}</p>
</div>
        );
    }
}
export default As1;