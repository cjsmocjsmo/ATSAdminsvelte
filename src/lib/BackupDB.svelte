<script>
	import { db } from '$lib/firebase';
	import { collection, query, getDocs } from 'firebase/firestore';
    import Hourglass from '$lib/Hourglass.gif'

	async function getAllReviews() {
		let zoo = [];
		const q = query(collection(db, 'reviews'));
		const querySnapshot = await getDocs(q);
		let qhs = querySnapshot.forEach((rev) => {
			let ace = rev.data();
			zoo.push(ace);
		});
        console.log(zoo)
		let boo = JSON.stringify(zoo)


		async function createZipFile() {
			const ress = await fetch(`http://atsio.xyz/Backup?reviewslist=${boo}`)
			let resp = await ress.json();
			console.log("this is server resp")
			console.log(resp)
			// if (resp === "GZIPISCOMPLETENOW") {
			// 	const dloadresp = await fetch("http://atsio.xyz/assets/backup.gz")
			// }
		}

		let newZipFile = createZipFile();

		// if (zoo.length != null) {
		// 	return zoo.length;
		// } else {
		// 	return '0';
		// }
	}
	let revcount = getAllReviews();
</script>

{#await revcount}
    <img src={Hourglass} alt="fuckti" />
{:then rev }
    <button class="backupdb-btn" on:click={getAllReviews}>Backup Db</button>
	<!-- <a href="./archive.zip" download>
		<button class="dload-btn" >Download Zip File</button>
	</a> -->
{/await}

<style>
    button {
        font-size: 1.5em;
    }
</style>