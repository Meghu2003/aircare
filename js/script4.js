function proceed(){
    var table=document.getElementById('data');
    var x2=parseInt(prompt('Enter the Number of Passengers::'));
    for(i=1;i<=x2;i++){
        var pno=parseInt(prompt('Enter Passenger No.::'));
        var name=prompt('Enter Name::');
        var email=prompt('Enter E-mail::');
        var age=prompt('Enter Age::')
        var gender=prompt('Enter Gender::')
        var flight=prompt('Enter Flight::')
        switch(flight){
            case 'American EAGLE':
                total2=1990*x2;
                break;
            case 'VIRGIN ATLANTIC':
                total2=6000*x2;
                break;
            case 'JET BLUE':
                total2=2540*x2;
                break;
            case 'EAS JET.COM':
                total2=1498*x2;
                break;
            case 'EMIRATES':
                total2=8754*x2;
                break;
            case 'KLM':
                total2=2154*x2;
                break;
            default:
                document.writeln('Enter proper flight name');
        }
        var row=table.insertRow(i-1);
        var c1=row.insertCell(0);
        var c2=row.insertCell(1);
        var c3=row.insertCell(2);
        var c4=row.insertCell(3);
        var c5=row.insertCell(4);
        c1.innerHTML=pno;
        c2.innerHTML=name;
        c3.innerHTML=email;
        c4.innerHTML=age;
        c5.innerHTML=gender;
    }
    document.getElementById('total').innerHTML='Total=> $'+total2+'.00';
}

function proceed1(){
    alert("You will get a link to your e-mail for further payment");
    alert('You will now get revert back to home page');
}
function cancel(){
    alert("Are you sure you want to cancel the payment?s");
}