<script>
	import { db } from '$lib/firebase';
	import { collection, query, where, getDocs, waitForPendingWrites } from 'firebase/firestore';

	async function getQuarintineReviews() {
		let zoo = [];
		const q = query(collection(db, 'reviews'), where('Quarintine', '==', 'yes'));
		const querySnapshot = await getDocs(q);
		let qhs = querySnapshot.forEach((rev) => {
			let ace = rev.data();
			zoo.push(ace);
		});
		if (zoo.length != null) {
			return zoo.length;
		} else {
			return '0';
		}
	}
	let quarintinecount = getQuarintineReviews();
</script>

<div class="rev-count">
	{#await quarintinecount}
		<p>waiting...</p>
	{:then quarintinecount}
		<p class="count">{quarintinecount}</p>
	{/await}
	<p>Quarintine</p>
</div>

<style>
	.rev-count {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-right: 7px;
		padding-left: 7px;
		border-bottom: 3px;
		border-color: brown;
		border-style: solid;
	}

	.count {
		font-size: 2em;
		color: rgb(53, 12, 201);
	}
</style>
