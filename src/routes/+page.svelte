<script>

	import AddPlacementPage from "./home/AddPlacementPage.svelte";
	import ShowPlacement from "./home/ShowPlacement.svelte";
	import  supabase from '../backend/connection';



	

	/*export async function load() {
	const { data,err,sh } = await supabase.from("test").select();
	console.log(data)
	}*/

	const menus = [
		{
			name: "Add Placement",
			icon: "https://cdn-icons-png.flaticon.com/128/9692/9692606.png",
		},
		{
			name: "Show Placement",
			icon: "https://cdn-icons-png.flaticon.com/128/5836/5836684.png",
		},
	];

	let data=[{
		name:"Infosys",
		date:"21/7/200",
		backpapers:5,
		cgpa:2

	},
	{
		name:"Experion",
		date:"21/7/200",
		backpapers:5,
		cgpa:2

	}];

	let selectedMenu = 0;
	/**
	 * @param {number} p
	 */
	function change(p) {
		selectedMenu = p;
	}
</script>

<div class="body">
	<div class="drawer">
		<nav>
		<a href="/root">hai</a>
		</nav>
		<h2 style="padding-left:20px;margin:0px,margin-bottom:10px;color:white">
			Menu
		</h2>
		{#each menus as item, i}
			<div
				style="display:flex;flex-direction:row;align-items:center;margin-left:20px"
				on:mousedown={() => {
					selectedMenu = i;
				}}
			>
				<img src={item["icon"]} alt="asf" height="25" width="25" />
				<div style="width:20px" />
				<h3>{item["name"]}</h3>
			</div>
		{/each}
	</div>

	<div class="container">
		{#if selectedMenu == 0}
			<AddPlacementPage  data={data}/>
		{:else if selectedMenu == 1}
			<ShowPlacement data={data} />
		{/if}
	</div>
</div>

<style>
	.drawer {
		height: 100%;
		width: 300px;
		background-color: blueviolet;
	}
	.body {
		width: 100%;

		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: start;

		align-items: center;
		
	}

	.container {
		height: 100%;
		width: 100%;
		padding: 30px;
		
		
	}
</style>
