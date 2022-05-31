const jobs=[
    {id:1, isActive:true},
    {id:2, isActive:false},
    {id:3, isActive:true},
    {id:4, isActive:true},
    {id:5, isActive:false}
];
const activeJobs=jobs.filter(job=>job.isActive)
console.log(activeJobs)