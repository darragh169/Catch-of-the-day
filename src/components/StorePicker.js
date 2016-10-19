import React from 'react'
import { getFunName} from '../helpers.js'

class StorePicker extends React.Component {
	render(){
		return (
			<form className="store-selector">
				<h2>Please Enter a store</h2>
				<input type="text" required placeholder= { getFunName() }  />
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}

export default StorePicker;