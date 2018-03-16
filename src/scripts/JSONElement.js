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
		getRootJson: function (parent) {
			if (!parent) parent = this.$parent;
			if (parent.rootJson === undefined) {
				return this.getRootJson(parent.$parent);
			} else {
				return parent.rootJson;
			}
		}
	},
	computed: {
		relativeJson: {
			get: function () {
				return find(this.getRootJson(), this.path);
			},
			set: function (value) {
				assign(this.getRootJson(), this.path, value);
			}
		}
	}
}