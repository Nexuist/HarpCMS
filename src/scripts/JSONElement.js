function find(object, path) {
	if (typeof path === "string") {
		path = path.match(new RegExp(/\w+/, "g"));
	}

	if (path.length > 1) {
		let e = path.shift();
		return find(object[e] = typeof object[e] === "object" ? object[e] : {}, path);
	} else {
		return object[path[0]];
	}
}

function assign(object, path, value) {
	if (typeof path === "string") {
		path = path.match(new RegExp(/\w+/, "g"));
	}

	if (path.length > 1) {
		let e = path.shift();
		assign(object[e] = typeof object[e] === "object" ? object[e] : {}, path, value);
	} else {
		object[path[0]] = value;
	}
}

export default {
	methods: {
		getRootJSON: function (parent) {
			if (!parent) parent = this.$parent;
			if (parent.rootJSON === undefined) {
				return this.getRootJSON(parent.$parent);
			} else {
				return parent.rootJSON;
			}
		}
	},
	computed: {
		relativeJSON: {
			get: function () {
				return find(this.getRootJSON(), this.path);
			},
			set: function (value) {
				assign(this.getRootJSON(), this.path, value);
			}
		}
	}
}