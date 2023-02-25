import { writable } from 'svelte/store';
import supabase from '../../backend/connection';


    let content=writable<any[]>([])
	export default async function load() {
	const  {data,error}  = await supabase.from("placements").select();
    if(data)
    {
        content.set(data)
    }
       
	}

    load()



   