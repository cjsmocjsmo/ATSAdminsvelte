<script>
    import { authState } from 'rxfire/auth';
    import { initializeApp } from 'firebase/app';
    import { getAuth } from 'firebase/auth';
    import { filter } from 'rxjs/operators';
    const app = initializeApp({ /* config */ });
    const auth = getAuth();
    authState(auth).subscribe(user => {
    console.log(user, ' will be null if logged out');
    });

    // Listen only for logged in state
    const loggedIn$ = authState(auth).pipe(filter(user => !!user));
    loggedIn$.subscribe(user => { console.log(user); });
</script>

<body>
	<div class="login">
		<h1>LogIn</h1>
		<input  placeholder="UserName" id="name" class="foo" type="text" name="name" />
		<input
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

