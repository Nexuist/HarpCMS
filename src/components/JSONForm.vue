<template>
    <form>
        <slot :rootJSON="rootJSON"></slot>
    </form>
</template>

<script>
export default {
	props: ["page"],
	created: function() {
		fetch(`http://localhost:8080/api/locals/${this.page}`)
		.then(res => res.json())
		.then(json => {
			this.rootJSON = json;
		})
		.catch(err => {

		});
	},
	data: () => {
		return {
			rootJSON: {}
		};
	}
};
</script>