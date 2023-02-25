

<script>
// @ts-nocheck

import  supabase  from "../../backend/connection";

var company_name=""
var batch_id=0
var course_id=0
var start_date=""
var end_date=""
var end_time=""
var max_backpapers=0
var min_cgpa_college=0.6
var job_desc=""
var salary=0.5
var if_bond=2
 
async function addData()
{
    const { error } = await supabase
  .from('placements')
  .insert({
    company_name:company_name,
    batch_id:1,
    course_id:2,
    start_date:start_date,
    end_date:end_date,
    end_time:end_time,
    max_backpapers:max_backpapers,
    min_cgpa_college:min_cgpa_college,
    job_desc:job_desc,
    salary:salary,
    if_bond:if_bond

})
console.log(error)
if(!error)
{
alert("Data inserted")
}
}

</script>



<div class="placementpage">
    
    <h1>Add Placement</h1>
    <div style="height:50px"></div>
    <div style="display:flex;flex-direction:row;">
        <input class="text" value={company_name} on:change={(e)=>{company_name=e.target.value}} placeholder="Company Name" type="text" />
        <div style="width:50px"></div>
        <input class="text" placeholder="Recruitment Date" type="text" />
    </div>
    <div style="display:flex;flex-direction:row;">
        <input placeholder="Max no of arrear" value={max_backpapers}  on:change={(e)=>{max_backpapers=e.target.value}} class="text" type="number"/>
        <div style="width:50px"></div>
        <input placeholder="Min CGPA" value={min_cgpa_college}  on:change={(e)=>{min_cgpa_college=e.target.value}} class="text" type="number"/>
    </div>

    <div style="display:flex;flex-direction:row;">
        <select class="text" style="width: 260px;height:55px" >
            <option value="MCA">MCA</option>
            <option value="MCA">BCA</option>
            <option value="IMCA">IMCA</option>
        </select>
        <div style="width:50px"></div>
        <input placeholder="Batch" class="text" type="number"/>
    </div>

    <div style="display:flex;flex-direction:row;">
        <input placeholder="Start date" class="nontext" type="date" value={start_date}   on:change={(e)=>{start_date=e.target.value}}/>
        <div style="width:50px"></div>
        <input placeholder="End date" class="nontext" value={end_date}  on:change={(e)=>{end_date=e.target.value}} type="date"/>
    </div>

    <div style="display:flex;flex-direction:row;">
        <input placeholder="End Time" value={end_time}  on:change={(e)=>{end_time=e.target.value}} class="nontext" type="time"/>
        <div style="width:50px"></div>
        <input placeholder="Job Description" value={job_desc}  on:change={(e)=>{job_desc=e.target.value}} class="nontext" type="text"/>
    </div>
    <div style="display:flex;flex-direction:row;">
        <input placeholder="Salary" value={salary}  on:change={(e)=>{salary=e.target.value}} class="text" type="text"/>
        <div style="width:50px"></div>
        <input placeholder="Bond" class="text" type="number" value={if_bond}  on:change={(e)=>{if_bond=e.target.value}}/>
    </div>
   
   
    
    
    
    <div style="height:20px"></div>
    <button  on:mouseup={()=>{addData()}}>Submit</button>

</div>


<style>
    h1{
        margin: 0px;
    }
    button
    {
        background-color: blueviolet;
        border: 0px;
        border-radius: 10px;
        width:100px;
        height: 30px;
        color: white;
    }
    .text
    {
        width:250px;
        height: 50px;
        margin-bottom: 10px;
    }
    .nontext
    {
        width:255px;
        height: 55px;
        margin-bottom: 10px; 
    }
    
    .placementpage
    {
        width:100%;
        height: 100%;
       
        display: flex;
        flex-direction: column;
       
    }

</style>