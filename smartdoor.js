"use strict";
class SmartDoor extends HouseComponent {
	constructor(parentElement, id) {
		super(parentElement, id, 'door');
		this.isOpen = false;
	}

	render () {
		if (this.componentElement == null) {
			this.componentElement = document.createElement(this.componentTag);
			this.parentElement.appendChild(this.componentElement);
		}
		this.componentElement.innerHTML =
			'<div>Дверь ' +
			'<label for="door-switch-' + this.id + '">открыта: </label><input type="checkbox" id="open-switch-' + this.id + '" />' +
			'</div>';
		this.isOpenEl = document.getElementById('open-switch-' + this.id);
		this.openClose(this.isOpen);
		this.isOpenEl.onchange = this.openCloseHandler.bind(this);
	}
	
	openClose (state) {
		this.isOpen = state;
		this.isOpenEl.checked = this.isOpen;
	}

	openCloseHandler (event) {
		this.isOpen = event.target.checked;
	}
}