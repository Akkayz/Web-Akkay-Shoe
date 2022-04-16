function dangki(){
			var ht=window.document.getElementById("hovaten").value;
			var gt=window.document.getElementById("gioitinh").value;
			var email=window.document.getElementById("email").value;
			if(ht.length==0){
				alert("Vui lòng nhập họ và tên");
				window.document.getElementById("hovaten").focus();
	 		return false;
		}
			if(gt.lenngth==0){
				alert("Vui lòng nhập  giới tính")
				window.document.getElementById("gioitinh").focus();
			}
			ts=/\w+@\w+\.\w+/;
			if(email=""){
				alert("Bạn chưa nhập email");
	  			window.document.getElementById("email").value="";
	  			document.document.getElementById("email").focus(); return false;
			}
			else if (ts.test(email)==false){
				alert("Email không đúng định dạng");
				document.getElementById("email").focus(); return false;
			}
	 }