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
        }, 2000);
        const error=false;
        if(!error){
            resolve()
        }else{
            reject('Error: There was an uncaught error')
        }
    })
}
createPost({title: 'Post Three', body: "This is post Three"})
.then(()=>{
    getPosts();
})
.catch(err=>console.log(err));


// How to use promise.all();
const promise1=Promise.resolve('Hello World');
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Good Bye')
})
Promise.all([promise1,promise2,promise3]).then(value=>{
    console.log(value);
}).catch(err=>{
    console.log(err);
})