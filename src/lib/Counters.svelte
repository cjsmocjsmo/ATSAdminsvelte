<script>
	import TotalCounter from '$lib/counters/TotalCounter.svelte';
	import AcceptedCounter from './counters/AcceptedCounter.svelte';
	import QuarintineCounter from './counters/QuarintineCounter.svelte';
	import DeletedCounter from './counters/DeletedCounter.svelte';
</script>

<div class="cgroup">
	<TotalCounter />
	<AcceptedCounter />
	<QuarintineCounter />
	<DeletedCounter />
</div>

<style>
	.cgroup {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
</style>
