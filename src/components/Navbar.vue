<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">Navbar</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<!-- TODO: active? -->
				<li class="nav-item">
					<router-link to="/" class="nav-link">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link to="test" class="nav-link">Link</router-link>
				</li>
			</ul>
		</div>
		<button class="btn btn-danger mr-2" v-on:click="emit('reset')">Reset</button>
		<button class="btn btn-success" v-on:click="emit('startCompiling')">Save & Preview</button>
	</nav>
</template>

<script>
import EventBus from "../scripts/EventBus.js";

export default {
	methods: {
		emit(msg) {
			EventBus.$emit(msg);
		}
	}
}
</script>