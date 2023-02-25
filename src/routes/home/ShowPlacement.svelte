<script >
    import PlacementCard from "./Componets/PlacementCard.svelte";
    

    import  supabase  from "../../backend/connection";
	import { dataset_dev } from "svelte/internal";

  export async function load() {
    const { data,error } = await supabase.from("placements").select();
   // console.log(data)
    return {
      placements: data ?? [],
    };
  }


  /**
	 * @type {any[]}
	 */
  let data=[]
  load().then((value)=>{
    data=value['placements']
  })

  

  

	
</script>

<div class="placement display">
    
   <h1>Current Added placements</h1>

   <!-- svelte-ignore empty-block -->
   {#each data  as  item }
    <PlacementCard data={item}></PlacementCard>
   {/each}
  

</div>






<style>

</style>