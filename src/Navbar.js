import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import { Link } from 'react-router-dom'
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex" };
        this.handleFormatChange = this.handleFormatChange.bind(this);
    }
    handleFormatChange(e) {
        this.setState({ format: e.target.value });
        this.props.handleChange(e.target.value);
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <Link to="/">ColorPaletteApp</Link>
                </div>
                <div>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className='selectContainer'>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}
export default Navbar;
