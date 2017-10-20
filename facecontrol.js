"use strict";
class FaceControl extends HouseComponent {
	constructor(parentElement, id) {
		super(parentElement, id, 'alarm');
		this.switch = false;
	}

	render() {
		if (this.componentElement == null) {
			this.componentElement = document.createElement(this.componentTag);
			this.parentElement.appendChild(this.componentElement);
			this.componentElement.innerHTML = '<div>Сигнализация включена</div>';
		}
	}

	switchAlarm (state) {
		this.switch = state;
		this.switchEl.checked = this.switch;
	}

	switchAlarmHandler (event) {
		this.switch = event.target.checked;
	}
}