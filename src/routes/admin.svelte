<script>
	import Counters from '$lib/Counters.svelte';
	import Review from '$lib/Review.svelte';
	import { db } from '$lib/firebase';
	import { collection, query, where, getDocs, waitForPendingWrites } from 'firebase/firestore';

	let quarActive = false;

	async function getQuarintineReviews() {
		let zoo = [];
		const q = query(collection(db, 'reviews'), where('Quarintine', '==', 'yes'));
		const querySnapshot = await getDocs(q);
		let qhs = querySnapshot.forEach((rev) => {
			console.log(rev);
			let ace = rev.data();
			zoo.push(ace);
		});
		if (zoo.length !== null) {
			quarActive = true;
			return zoo;
		} else {
			quarActive = false;
		}
	}
	let quarintine = getQuarintineReviews();
</script>

<body>
	<h1>Admin Page</h1>
	<Counters />
	<div>
		<h1>AllQuarintined Reviews</h1>
		{#if quarActive}
			{#await quarintine}
				<p>waiting...</p>
			{:then message}
				{#each message as M}
					<Review {...M} />
				{/each}
			{/await}
		{:else}
			<p>No Quarintined reviews found</p>
		{/if}
	</div>
</body>

<style>
	body {
		background-color: darkgray;
		height: 100vh;
	}
</style>
