import DisplayTool from "./DisplayTool";
import {Component} from "react";

class submitButton extends Component{

    constructor(props) {
        super(props);
        this.state = {
            str: '',
        }
        this.filterNonStandardChar = this.filterNonStandardChar.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * return a filtered string with no non standard char
     * @param str
     * @returns {string}
     */
    filterNonStandardChar(str) {
        return str.replace(/[^\s\w\|\\\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\:\;\"\'\<\,\>\.\?\/\~\``]/gi, '');
    }

    onTextChange(event) {
        this.setState({ str: this.state.str.concat(this.filterNonStandardChar(event.target.value)) });
    }

    onSubmit(event) {
        event.preventDefault();
        return (
            <div>
                {this.state.str}
            </div>
        );
    }

    render() {
        return (
            <div>
                <DisplayTool value="" onChange={this.onTextChange} onSubmit={this.onSubmit} res="B"/>
            </div>
        );
    }
}

export default submitButton;