/**
 * Form
 * @author yukiusa
 */
import React from "react";
import ReactDOM from "react-dom"

class Form extends React.Component {
    render() {
       return (
           <div>
              <form>
                  <input type="text" id="text"/>
                  <button>submit</button>
              </form>
           </div>
       );
    }
}
export default Form

