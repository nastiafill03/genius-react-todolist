import { Component } from "react";
class TestClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {name: 'Nastia'}
    }
    render() {
        return(
            <div>
                <h1 className="heading-2">{this.state.name}</h1>
            </div>
        );
    }
}
export default TestClassComponent;