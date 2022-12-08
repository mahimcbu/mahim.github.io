
//education page
const deg = document.querySelector(".degrees");

const button = document.createElement('button');
button.innerHTML="Click to show!";
button.id = "myButton";
button.type = "submit";
button.addEventListener("click", ()=>{
    degrees(); // doing all the fetch, parsing json objects into html table.
    checkPromise(); //using promise all to check for promise  returns and catch any error
})

deg.appendChild(button);


const degrees = () =>{
  
    fetch("./Script/json.json")
    .then((resp)=> resp.json())
    .then((results)=>{
    const databody = document.getElementById("databody");
    let out ="";
    for (let result of results) { //using template string
        out +=`
            <tr>
                <td>${result.School}</td>
                <td>${result.Program}</td>
                <td>${result.Type}</td>
                <td>${result.Gpa}</td>
                <td>${result.Year}</td>
            </tr>
        `;      
    }
    databody.innerHTML = out;
    })

}

const checkPromise = () => {
    const urls = [
        './Script/json.json'
       ]
       Promise.all(urls.map(url =>
           fetch(url).then(resp => resp.json())
       ))
         .then(results => {
           console.log('1', results[0])
           
         })
         .catch((err) =>{
            console.log('ughhhh fix it!', err)
         });
}