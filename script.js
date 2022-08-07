var res=fetch("https://jsonplaceholder.typicode.com/posts");
res.then((data)=>data.json())
.then((data1)=>foo(data1));


function foo(arr){
for(var i=0;i<10;i++){
   
    var div=document.createElement("div");
    div.style.color="Blue";
    div.style.fontSize="15px";
    div.innerHTML=`<div class="card" style="width: 35rem";>
    <div class="card-body">
      <h5 class="card-title">${arr[i].id}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${arr[i].title}</h6>
      <p class="card-text">${arr[i].body}</p>
    </div>
  </div>`;
    document.body.append(div);
}
}