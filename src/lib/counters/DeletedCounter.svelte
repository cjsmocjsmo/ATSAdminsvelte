<script>
	import { db } from '$lib/firebase';
	import { collection, query, where, getDocs, waitForPendingWrites } from 'firebase/firestore';

	async function getDeletedReviews() {
		let zoo = [];
		const q = query(collection(db, 'reviews'), where('Delete', '==', 'yes'));
		const querySnapshot = await getDocs(q);
		let qhs = querySnapshot.forEach((rev) => {
			let ace = rev.data();
			zoo.push(ace);
		});
		if (zoo.length != null) {
			return '0';
		} else {
			return zoo.length;
		}
	}
	let deletedcount = getDeletedReviews();
</script>

<div class="rev-count">
	{#await deletedcount}
		<p>waiting...</p>
	{:then deletedcount}
		<p class="count">{deletedcount}</p>
	{/await}
	<p>Deleted</p>
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
