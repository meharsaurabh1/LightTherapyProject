import React, { Component } from "react";
import '../index.css';

class FormBox extends React.Component {

    handleSub = ()=> {
        fetch('http://localhost:5000/savereview/', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
    })
})
    }

    render() {
        return ( 
            <div>Hello World
            <form onSubmit={this.handleSub}>
                <input type="text">
                </input>
                <button type="submit">Bruh</button>
            </form>
            </div>
             
        );
    }

}

export default FormBox;