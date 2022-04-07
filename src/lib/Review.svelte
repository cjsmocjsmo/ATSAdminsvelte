<script>
	import { db } from '$lib/firebase';
	import { setDoc, doc } from 'firebase/firestore';

	// export let Count;
	export let UUID;
	export let Date;
	export let Name;
	export let Email;
	export let Sig;
	export let Message;
	export let Approved;
	export let Quarintine;
	export let Delete;

	let inActive = false;

	async function setApproved() {
		let title = 'review' + UUID;
		console.log(title);
		await setDoc(doc(db, 'reviews', title), {
			UUID: UUID,
			Date: Date,
			Name: Name,
			Email: Email,
			Sig: Sig,
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
		let title2 = 'review' + UUID;
		console.log(title2);
		await setDoc(doc(db, 'reviews', title2), {
			UUID: UUID,
			Date: Date,
			Name: Name,
			Email: Email,
			Sig: Sig,
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
		<p>Sig: {Sig}</p>
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
