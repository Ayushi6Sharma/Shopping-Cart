var grandTotal=0;
var row=1;
var srno=1;
function insertItem() {
    
    var name=document.getElementById("item-name-input").value;
    var price=document.getElementById("item-price-input").value;
    
    name=name.trim();
    price=price.trim();
    grandTotal=grandTotal+parseInt(price);
    if(name=='' || price=='')
    {
        return;
    }
    if(!isNaN(name) || isNaN(price))
    {
        return;
    }
        var table=document.getElementById("table");
        var newrow=table.insertRow(row);
        var cell1=newrow.insertCell(0);
        var cell2=newrow.insertCell(1);
        var cell3=newrow.insertCell(2);
        var label1=document.createElement("label");
        var label2=document.createElement("label");
        var data2=document.createTextNode(name);
        var data3=document.createTextNode(price);
        label1.appendChild(data2);
        label2.appendChild(data3);
        cell1.innerHTML=srno;
        cell2.appendChild(label1);
        cell3.appendChild(label2);
        document.getElementById("grandTotal").innerHTML=grandTotal;
        row++;
        srno++;
        document.getElementById("item-name-input").value='';
        document.getElementById("item-price-input").value='';
}