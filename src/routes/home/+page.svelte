<script>
	import AddPlacementPage from '../home/AddPlacementPage.svelte';
	import ShowPlacement from '../home/ShowPlacement.svelte';


	const menus = [
		{
			name: 'Add Placement',
			icon: 'https://cdn-icons-png.flaticon.com/128/9692/9692606.png'
		},
		{
			name: 'Show Placement',
			icon: 'https://cdn-icons-png.flaticon.com/128/5836/5836684.png'
		}
	];


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
			<h2 style="padding-left:20px;margin:0px,margin-bottom:10px;color:#E8E2E2">Menu</h2>
			{#each menus as item, i}
				<div
					style="display:flex;flex-direction:row;align-items:center;margin-left:20px"
					on:mousedown={() => {
						selectedMenu = i;
					}}
				>
					<img src={item['icon']} alt="asf" height="25" width="25" />
					<div style="width:20px" />
					<h3>{item['name']}</h3>
				</div>
			{/each}
		</div>

		<div class="main">
		<div class="nav">
			<img class="dp" alt="" src="https://static.toiimg.com/photo/msid-70290422/70290422.jpg">
		</div>
			<div class="container">
				{#if selectedMenu == 0}
					<AddPlacementPage  />
				{:else if selectedMenu == 1}
					<ShowPlacement  />
				{/if}
			</div>
		</div>
	</div>


<style>
	h3 {
		color: #e8e2e2;
	}

	.main {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.nav {
		height: 60px;
		
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: end;
		align-items: center;
	}
	.dp
	{
		 height: 40px;
		 width: 40px;
		 border-radius: 50%;
		 padding: 10px;
	}
	.drawer {
		height: 100%;
		width: 300px;
		background-color: #20262e;
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
		padding-top: 0px;
	}
</style>
