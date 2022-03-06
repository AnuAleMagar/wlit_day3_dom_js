const ShowInfo= function(){
    const name =document.getElementById('name').value;
    const age =document.getElementById('age').value;
    const college =document.getElementById('college').value;
    const address =document.getElementById('address').value;
    const output = document.createElement('h2');
    output.innerHTML=`name is ${name} age is ${age} college is ${college} address is${address}`;
    document.body.appendChild(output);

}