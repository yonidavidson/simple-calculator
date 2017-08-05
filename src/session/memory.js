class memory {
	constructor() {
		this.data = {};
	}

	getValue(key){
		if (key in this.data){
			return this.data;
		}
		return 0;
	}
}
