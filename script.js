function submit(){
    const dob = document.getElementById('dob').value;
    if(dob ===""){
        document.getElementById('print').textContent="Please enter your Date of Birth";
        return;
    }
    const date=new Date(dob);
    const now=new Date();
    let age=now.getFullYear()-date.getFullYear();
    const month=now.getMonth()-date.getMonth();

    if(month<0||(month === 0 && now.getDate() < date.getDate())){
        age--;
    }
    document.getElementById('print').textContent = `You are ${age} years old.`;
}
function clearAllElementByTag(print){
 const element=document.getElementById(print);
 if(element){
    element.remove();
 }
}