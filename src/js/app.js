/**
 * app.js
 * @author yukiusa
 */
import React from "react";
import ReactDOM from "react-dom"
import Form from './Form'

class Layout extends React.Component {
    render() {
        return (
            <div className="Test1">
                <h1>It work!</h1>
                <p>sample change</p>
                <Form/>
            </div>
        );
    }
}
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app );

