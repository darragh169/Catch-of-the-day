import React from 'react'
import { getFunName} from '../helpers.js'

class StorePicker extends React.Component {
	
	goToStore(event){
		event.preventDefault();
		console.log(this.storeInput.value);
	}

	render(){
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2>Please Enter a store</h2>
				<input type="text" required placeholder={ getFunName() } defaultValue={getFunName()} ref={ (input) => { this.storeInput = input }} />
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}

export default StorePicker;