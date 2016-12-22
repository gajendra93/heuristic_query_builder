import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import QueryPage from "./components/QueryPage.jsx";

injectTapEventPlugin();

const muiTheme = getMuiTheme(baseTheme);

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<QueryPage />
	</MuiThemeProvider>
, document.querySelector("#root"));