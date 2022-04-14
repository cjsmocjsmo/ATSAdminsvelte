<script>
	import { db } from '$lib/firebase';
	import { collection, query, where, getDocs } from 'firebase/firestore';

	let name = '';
	let password = '';
	let warningInActive = true;

	async function getCreds() {
		let creds = [];
		const q = query(collection(db, 'creds'));
		const querySnapshot = await getDocs(q);
		let qhs = querySnapshot.forEach((rev) => {
			let acred = rev.data();
			creds.push(acred);
		});
		if (creds[0].password === password && creds[0].user === name) {
			window.location.replace('/admin');
			warningInActive = true;
		} else {
			warningInActive = false;
			return 'Please setup creds db';
		}
	}

	function handleClick() {
		let allcreds = getCreds();
	}
</script>

<body>
	<div class="login">
		<h1>AlphaTree Service Admin</h1>
		<input bind:value={name} placeholder="UserName" id="name" class="foo" type="text" name="name" />
		<input
			bind:value={password}
			placeholder="Password"
			id="password"
			class="foo"
			type="text"
			name="password"
		/>
		<button on:click={handleClick}>Login</button>
		{#if warningInActive}
			<p />
		{:else}
			<p>Password or Username is incorrect!</p>
		{/if}

		<!-- <a href="/admin"><button>Login With Google</button></a> -->
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

	@media (max-width: 375px) {
		h1 {
			font-size: 1.75em;
		}
		
		input {
			font-size: 1.5em;
		}
	}
</style>
