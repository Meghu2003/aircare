var x=document.getElementsByClassName('img');
for(i=0;i<(x.length);i++){
    x[i].onclick=function(){
        var d=this.nextElementSibling;
        if(d.style.height){
            d.style.height=null;
        }
        else{
            d.style.height=d.scrollHeight+'px';
        }
    }
}