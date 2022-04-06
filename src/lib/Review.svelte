<script>
	export let Count;
	export let UUID;
	export let Date;
	export let Name;
	export let Email;
	export let Message;
	export let Approved;
	export let Quarintine;
	export let Delete;

	import { db } from '$lib/firebase';
	import { setDoc, doc } from 'firebase/firestore';

	let inActive = false;

	let currentDate = new Date();
	let time = currentDate.getHours() + currentDate.getMinutes() + currentDate.getSeconds();
	let title = 'review' + time;

	async function setApproved() {
		await setDoc(doc(db, 'reviews', title), {
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
		await setDoc(doc(db, 'reviews', title), {
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
		<h2>Review{Count}</h2>
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
		font-size: 2em;
	}
</style>
