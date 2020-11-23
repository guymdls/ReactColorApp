import React, { Component } from "react";
import ColorBox from "./ColorBox"
import "./Palette.css"
import Navbar from "./Navbar"



// props: colors array, emoji, id, paletteName
class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 }
        this.changeLevel = this.changeLevel.bind(this)

    }
    changeLevel(newLevel) {
        this.setState({ level: newLevel })
    }
    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color => {
            return <ColorBox background={color.hex} name={color.name} />
        });

        return (
            <div className='Palette'>
                <Navbar level={this.state.level} changeLevel={this.changeLevel} />
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        );
    }

}

export default Palette;