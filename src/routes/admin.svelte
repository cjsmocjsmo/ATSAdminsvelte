<script>
	import Counters from '$lib/Counters.svelte';
	import Review from '$lib/Review.svelte';
	import { db } from '$lib/firebase';
	import { collection, query, where, getDocs, waitForPendingWrites } from 'firebase/firestore';
	import BackupDb from '$lib/BackupDB.svelte';

	let quarActive = false;

	async function getQuarintineReviews() {
		let zoo = [];
		const q = query(collection(db, 'reviews'), where('Quarintine', '==', 'yes'));
		const querySnapshot = await getDocs(q);
		let qhs = querySnapshot.forEach((rev) => {
			let ace = rev.data();
			zoo.push(ace);
		});
		if (zoo.length == null || zoo.length == 0) {
			quarActive = false;
			return zoo;
		} else {
			quarActive = true;
			return zoo;
		}
	}
	let quarintine = getQuarintineReviews();
</script>

<body>
	<h1 class="AP">Admin Page</h1>
	
	<Counters />
	
	<div>
		<div class="head">
			<h1>AllQuarintined Reviews</h1>
			<BackupDb />
		</div>
		
		{#await quarintine}
			<p>waiting...</p>
		{:then message}
			{#if quarActive}
				{#each message as M}
					<Review {...M} />
				{/each}
			{:else}
				<p>No Quarintined reviews found</p>
			{/if}
		{/await}
	</div>
</body>

<style>
	body {
		background-color: darkgray;
		height: 100vh;
	}

	.AP {
		text-align: center;
	}

	.head {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	
</style>
