<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">UHSSE Website</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						{{ $route.name }}
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<router-link class="dropdown-item" to="/">Home</router-link>
						<router-link class="dropdown-item" to="/announcements">Announcements</router-link>
					</div>
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
};
</script>