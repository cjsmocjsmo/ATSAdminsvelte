<script>
	import { db } from '$lib/firebase';
	import { setDoc, doc } from 'firebase/firestore';

	// export let Count;
	export let UUID;
	export let Date;
	export let Name;
	export let Email;
	export let Message;
	export let Approved;
	export let Quarintine;
	export let Delete;

	// console.log(Count)

	let inActive = false;

	// let currentDate2 = new window.Date();
	// let time = currentDate2.getHours() + currentDate2.getMinutes() + currentDate2.getSeconds();
	// let title = 'review' + time;

	async function setApproved() {
		let title = "review" + UUID;
		await setDoc(doc(db, 'reviews', title), {
			// Count: Count,
			UUID: UUID,
			Date: Date,
			Name: Name,
			Email: Email,
			Sig: Email,
			Message: Message,
			Approved: 'yes',
			Quarintine: 'no',
			Delete: 'no'
		});
	}

	function handleApprovedClick() {
		setApproved();
		inActive = true;
	}

	async function setDeleted() {
		let title2 = "review" + UUID;
		await setDoc(doc(db, 'reviews', title2), {
			// Count: Count,
			UUID: UUID,
			Date: Date,
			Name: Name,
			Email: Email,
			Sig: Email,
			Message: Message,
			Approved: 'no',
			Quarintine: 'no',
			Delete: 'yes'
		});
	}

	function handleDeletedClick() {
		setDeleted();
		inActive = true;
	}
</script>

{#if inActive}
	<p />
{:else}
	<div class="rev1">
		<h2>Review{UUID}</h2>
		<p>UUID: {UUID}</p>
		<p>Date: {Date}</p>
		<p>Name: {Name}</p>
		<p>Email: {Email}</p>
		<p>Message: {Message}</p>
		<p>Approved: {Approved}</p>
		<p>Quarintine: {Quarintine}</p>
		<p>Delete: {Delete}</p>
		<button on:click={handleDeletedClick}>Delete</button>
		<button on:click={handleApprovedClick}>Accept</button>
	</div>
{/if}

<style>
	button {
		font-size: 1.5em;
	}
</style>
