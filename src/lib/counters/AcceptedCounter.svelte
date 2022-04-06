<script>
	import { db } from '$lib/firebase';
	import { collection, query, where, getDocs } from 'firebase/firestore';

	async function getAcceptedReviews() {
		let zoo = [];
		const q = query(collection(db, 'reviews'), where('Approved', '==', 'yes'));
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
	let approvedcount = getAcceptedReviews();
</script>

<div class="rev-count">
	{#await approvedcount}
		<p>waiting...</p>
	{:then approvedcount}
		<p class="count">{approvedcount}</p>
	{/await}
	<p>Accepted</p>
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
