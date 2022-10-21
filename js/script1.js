a=Array.from(document.querySelectorAll('#myForm')).reduce((acc,input)=>({...acc,[input.id]:input.value}),{});
