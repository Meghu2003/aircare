function items(){
    var total1,x=document.getElementById('ticket').value;
    var y=1990;
    total1=parseInt(x)*y;
    document.getElementById('total').innerHTML='Total : : =>$'+ total1 +".00";
    window.total2=total1;
    window.x2=parseInt(x);
}

export{total2,x};