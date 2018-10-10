var btn,code,cname,co;
var kk;
var database = firebase.database();
var ref;var view;var ran,mam;
window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

ref = database.ref("Doctor");
ref.on('value',gotEv,errData);

function gotEv(data)
{
  var marks=data.val();
  var ke = Object.keys(marks);
  for(kk=0; kk<ke.length; kk++)
  {
      var k = ke[kk];
      co=marks[k].FName;
      var cn=marks[k].LName;
      mam=marks[k].Specialist;
      ran=marks[k].email;
      console.log(ran);
      var tr=document.createElement('tr');
      var td1=document.createElement('td');
      td1.innerHTML=co;

      var td2=document.createElement('td');
      td2.innerHTML=cn;

      var td3=document.createElement('td');
      td3.innerHTML=mam;

      var td4=document.createElement("td");
      td4.innerHTML=ran;

        tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

      document.getElementById("view").appendChild(tr);
  }
}// gotev
function errData(err){
console.log('Error..!!!');
}
