
var label;
var textbox;
var div,i=1;

var database = firebase.database();
var ref = database.ref('Discuss');
ref.on('value',gotEx,errData);
function addcmd()
{
  var tx=document.getElementById("tx").value;
  console.log(tx);

  ref.push({
    discussion:tx
  });
  document.getElementById("tx").value="";
  deleteid();
  ref.on('value',gotEx,errData);
}

function gotEx(datu)
{
  try{
   var ex=datu.val();
   var sa=Object.keys(ex);
   var s=sa.length;
    var divs=document.getElementById("disp");
   for(j=0;j<s;j++)
   {
       var k=sa[j];
       var dis=ex[k].discussion;
       console.log(dis);
       var l1=document.createElement("Label");
       var para=document.createElement("p");
       para.style.font = "italic bold 20px arial,serif";
       para.setAttribute("style"," width: 50%; padding: 12px 20px;margin: 8px 0; box-sizing: border-box;");
       para.style.font = "italic bold 15px arial,serif";
       para.innerHTML=dis;

       var pic=document.createElement("IMG");
       pic.setAttribute("src","images/page1-img2.png");
       pic.setAttribute("width", "30");
       pic.setAttribute("height", "30");
       divs.appendChild(pic);
       divs.appendChild(para);
       //div.appendChild(divs);
   }
 }
 catch(mistake)
   {
       console.log("Something happened");
     }
}
function errData(err){
console.log('Error..!!!');
console.log(err);
}
function deleteid()
{
  var lap=document.getElementById("disp");
  while(lap.hasChildNodes())
    {
      lap.removeChild(lap.lastChild);
}
}
