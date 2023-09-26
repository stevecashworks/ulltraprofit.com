const walletId= document.getElementById("walletId")
const amountInp= document.getElementById("amount")
const checkDeposit=()=>{
const amountVal= amountInp.value
const walletVal= walletId.value
const apiEntry="https://ultraprofit-backend.onrender.com"

if((!walletVal)||(!amountVal)){
alert("amount and  the wallet  id you paid with should be porvided")
}
else{
    fetch(`${apiEntry}/transactions/deposit`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "token":localStorage.getItem("prof_Id")
        },
        body:JSON.stringify({amount:amountVal,wallet_id:walletVal})
    }).then(res=>res.json()).then(data=>{
        if(data.success){
            window.location.assign("/dashboard.html")
        }
        else{
            alert("An error occured please try again later ")
            window.location.assign("/dashboard.html")

        }
    })
}

}