document.getElementById("showcart").style.display="none";
var giohang= new Array();
function themvaogiohang(x)
	{
		var sanphamhot = x.parentElement.children; 
		var hinh = sanphamhot[0].src;
		var tensp = sanphamhot[1].innerText;
		var gia = sanphamhot[2].children[0].innerText;
		var soluong= parseInt (sanphamhot[4].value);
		var sp = new Array(hinh,tensp,gia,soluong);
		var kt=0;
		for (i=0;i<giohang.length;i++){
				if(giohang[i][1]==tensp)
					{
						kt=1;
						soluong+=parseInt( giohang[i][3]);
						console.log(soluong);
						giohang[i][3]=soluong;
						break;
					}
			}
		if (kt==0){
			giohang.push(sp);
		}
		sessionStorage.setItem("giohang",JSON.stringify(giohang));
	}

function showmycart(){
	var ttgh=("");
	var tong = 0;
	for (var i=0;i<giohang.length;i++)
		{
			var soluong=document.getElementsByClassName("soluong").value;
			console.log(soluong);
			var tt=	giohang[i][2] * giohang[i][3];
			tong+=tt;
			ttgh+='<tr>'+
					'<td>'+(i+1)+'</td>'+
					'<td><img src="'+giohang[i][0]+'"></td>'+
					'<td>'+giohang[i][1]+'</td>'+
					'<td>'+giohang[i][2]+'</td>'+
					'<td>'+giohang[i][3]+'</td>'+
					'<td>'+
					'	<div>'+tt+'</div>'+
					'</td>'+
					'<td>'+
					'	<button onClick="xoasp(this)">Xoa</button>'+
					'</td>'+
					'</tr>';
		}
		ttgh+='<tr>'+
				'<th colspan="6">Tongdonhang</th>'+
				'<th>'+
					'<div>'+tong+'</div>'+
				'</th>'+
			'</tr>';
	document.getElementById("mycart").innerHTML=ttgh;
}
function xoasp(x){
	var tr = x.parentElement.parentElement;
	var tensp=tr.children[2].innerText;
	tr.remove();
	
	for (var i=0;i<giohang.length;i++){
		 if(giohang[i][1] == tensp){
			 giohang.splice(i,1);
		 }
		 }
	console.log(giohang);
	showmycart();
}
function xoatatca(){
	giohang=[];
	showmycart();
}
function showcart(){
	var x = document.getElementById("showcart")
	if (x.style.display ==="block"){
		x.style.display ="none";
	} else{
		x.style.display="block";
	}
	showmycart();
}
function shogiohang_trangthanhtoan(){
	showmycart();
	var gh=sessionStorage.getItem("giohang");
	var giohang=JSON.parse(gh);
	var ttgh=("");
	var tong = 0;
	for (var i=0;i<giohang.length;i++)
		{
			var soluong=document.getElementsByClassName("soluong").value;
			console.log(soluong);
			var tt=	giohang[i][2] * giohang[i][3];
			tong+=tt;
			ttgh+='<tr>'+
					'<td>'+(i+1)+'</td>'+
					'<td><img src="'+giohang[i][0]+'"></td>'+
					'<td>'+giohang[i][1]+'</td>'+
					'<td>'+giohang[i][2]+'</td>'+
					'<td>'+giohang[i][3]+'</td>'+
					'<td>'+
					'	<div>'+tt+'</div>'+
					'</td>'+
				'</tr>';
		}
		ttgh+='<tr>'+
				'<th colspan="5">Tongdonhang</th>'+
				'<th>'+
					'<div>'+tong+'</div>'+
				'</th>'+
			'</tr>';
	document.getElementById("mycart").innerHTML=ttgh;
}