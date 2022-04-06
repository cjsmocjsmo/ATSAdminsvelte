<script>
	import HourGlass from '$lib/Hourglass.gif';
	import Counters from '$lib/Counters.svelte';
	import Review from '$lib/Review.svelte';
	import { db } from '$lib/firebase';
	import { collection, query, where, getDocs, waitForPendingWrites } from 'firebase/firestore';

	function getDate() {
		let currentDate = new Date();
		let cDay = currentDate.getDate();
		let cMonth = currentDate.getMonth() + 1;
		let cYear = currentDate.getFullYear();
		let date = cDay + ':' + cMonth + ':' + cYear;
		return date;
	}

	function getTime() {
		let curDate = getDate();
		let currentDate2 = new Date();
		let time =
			currentDate2.getHours() + ':' + currentDate2.getMinutes() + ':' + currentDate2.getSeconds();
		let dt = curDate + ':' + time;
		return dt;
	}

	function getCount() {
		let currentDate = new Date();
		let cDay = currentDate.getDate();
		let cMonth = currentDate.getMonth();
		let cYear = currentDate.getFullYear();
		let cHour = currentDate.getHours();
		let cMinute = currentDate.getMinutes();
		let cSecond = currentDate.getSeconds();
		return cDay + cMonth + cYear + cHour + cMinute + cSecond;
	}

	function getUUID() {
		let d1 = getDate();
		let t1 = getTime();
		let UUID = d1 + t1;
		return UUID;
	}

	async function getQuarintineReviews() {
		let zoo = [];
		const q = query(collection(db, 'reviews'), where('Quarintine', '==', 'yes'));
		const querySnapshot = await getDocs(q);
		let qhs = querySnapshot.forEach((rev) => {
			let ace = rev.data();
			zoo.push(ace);
		});
		return zoo;
	}
	let quarintine = getQuarintineReviews();
</script>

<body>
	<h1>Admin Page</h1>
	<Counters />
	<div>
		<h1>AllQuarintined Reviews</h1>
		{#await quarintine}
			<!-- <img src={HourGlass} alt="fuckit" /> -->
			<p>waiting...</p>
		{:then message}
			{#each message as M}
				<Review {...M} />
			{/each}
		{/await}
	</div>
</body>

<style>
	body {
		background-color: darkgray;
		height: 100vh;
	}
</style>
