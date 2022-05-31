const posts=[
    {title : 'Post One', body: "This is POST one"},
    {title : 'Post Two', body: "This is POST two"}
]

getPosts=()=>{
    setTimeout(()=>{
    let output='';
    posts.forEach(element => {
        output+=`<li>${element.title}</li>`
    });
    document.body.innerHTML=output;
    },3000);
} 
createPost=(post)=>{
    return new Promise((resolve,reject)=>{
        setInterval(() => {
            posts.push(post)
            const error=false;
            if(!error){
                resolve()
            }else{
                reject('Error: There was an uncaught error')
            }
        }, 5000);
    })
}
async function init(){
await createPost({title: 'Post Three',body: "This is POST three"});
getPosts();
}
init();