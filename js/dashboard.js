const prof_Id=localStorage.getItem("prof_id")
const UserNameElement=document.getElementById("userName")
const bal=document.getElementById("bal")
const earnings=document.getElementById("earnings")
const myInp= document.getElementById("myInput")
const refValCon= document.getElementById("refVal")
console.log(UserNameElement)
const appEntry="https://ulltraprofit.onrender.com/"
if(!prof_Id){
    window.location.assign("./index.html")
}
try {
    let userDetails={}
const newUser=fetch(`https://ultraprofit-backend.onrender.com/users/tk`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "token":localStorage.getItem("prof_id")
    }
}).then(res=>res.json()).then(data=>{
    console.log(data)   
if(data.success){ 
        if(data.result.userName){

            UserNameElement.innerHTML=data.result.userName;
            bal.innerHTML=data.result.balance
            earnings.innerHTML=data.result.earnings
            myInp.value=`ulltraprofit.comg/create.html?ref=${data.result.userName}-${localStorage.getItem("prof_id")}`
            refValCon.innerHTML=data.result.referralBonus
            return data
        }
        }
    
})
console.log(newUser)
} catch (error) {
    console.log(error)
}
function logout(){
    
    localStorage.removeItem("prof_id")
    window.location.assign("./index.html")
}
