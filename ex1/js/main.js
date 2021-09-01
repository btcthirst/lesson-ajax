window.addEventListener('load', init);

function init(){
    document.getElementById('btn').addEventListener('click',function(){
        let req = new XMLHttpRequest();   

        req.open('POST','CalcHandler.ashx');

        req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

        req.onreadystatechange(function(){
            if(req.readyState==4&&req.status==200){
                document.querySelector("#res").innerHTML=req.responseText;
            }
        })

        req.send();
    })
}