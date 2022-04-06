<script>
	let name = '';
	let password = '';
</script>

<body>
	<div class="login">
		<h1>LogIn</h1>
		<input bind:value={name} placeholder="UserName" id="name" class="foo" type="text" name="name" />
		<input
			bind:value={password}
			placeholder="Password"
			id="password"
			class="foo"
			type="text"
			name="password"
		/>

		<a href="/admin"><button>Login With Google</button></a>
		<a href="/admin"><button>Next</button></a>
	</div>
</body>

<style>
	body {
		background: darkgrey;
		height: 100vh;
	}

	.login {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	input {
		font-size: 1.75em;
		margin: 10px;
		padding: 5px;
		background-color: burlywood;
	}

	button {
		font-size: 1.75em;
		margin: 10px;
		padding: 5px;
		background-color: darkseagreen;
	}
</style>
