

<script>
/**
	 * @type {{ [x: string]: any; }}
	 */
 export let data;
</script>


<div class="card">
<h3 style="margin:0px">{data['company_name']}</h3>
<div>
    <img src="https://cdn-icons-png.flaticon.com/512/591/591576.png" height="25" width="25" alt=""/>
    <div style="width:10px"></div>
    <h6>{data['end_date']}</h6>
    <div style="width:50px"></div>
    <img src=" https://cdn-icons-png.flaticon.com/128/3985/3985018.png" height="25" width="25" alt=""/>
    <div style="width:10px"></div>
    <h6>{data['job_desc']}</h6>


   
</div>
</div>

<style>

.card
{

    height: 100px;
    width: 300px;
    background-color: #20262e;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}
.card>div
{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
h6,h3{
    color: white;
}
</style>