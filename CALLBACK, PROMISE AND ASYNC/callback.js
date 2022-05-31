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
    },5000);
}
createPost=(post,callback)=>{
    setTimeout(()=>{
        posts.push(post)
        callback()
    },1000)
}
createPost({title: 'Post Three', body:'This is POST three'},getPosts);