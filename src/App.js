import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette"
import seedColors from "./seedColors"
import { generatePalette } from "./colorHelpers"
import PaletteList from "./PaletteList";
import { FindReplaceTwoTone } from "@material-ui/icons";
import { render } from "@testing-library/react";

class App extends Component {
  PaletteFinder(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }


  render() {
    return (
      < Switch >
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
        <Route exact path='/palette/:id' render={routeProps =>
          (<Palette palette={generatePalette(this.PaletteFinder(routeProps.match.params.id))} />)} />
      </Switch >
    )

  }

}
export default App;
