
// let result = {
//     "tag": "",
//     "free": false,
//     "role": false,
//     "user": "19BCS2053",
//     "email": "19BCS2053@cuchd.in",
//     "score": 0.8,
//     "state": "deliverable",
//     "domain": "cuchd.in",
//     "reason": "valid_mailbox",
//     "mx_found": true,
//     "catch_all": null,
//     "disposable": false,
//     "smtp_check": true,
//     "did_you_mean": "",
//     "format_valid": true
//   }



submitbtn.addEventListener("click",async (e)=>{
    e.preventDefault()
    resultCont.innerHTML = `<img src= "img/loading.svg" width:"23px" alt="loading">`
    let key="ema_live_ViCqLoJ5ZjngshuwcAqFNskuEuC4qLAKbbyw4mqS"
    let email=document.getElementById('email').value
    
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let res=await fetch(url)
    let result=await res.json()

    let str=''
    for(key of Object.keys(result)){
        if(result[key]!="" && result[key]!=" "){
      str = str + `<div>${key}: ${result[key]}</div>`
    }
    }
    console.log(str)
    resultCont.innerHTML = str

})



