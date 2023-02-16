$(document).ready(function () {
    window.localStorage.removeItem("token");
    $("#login").click(function () {
        var userName = $("#userName").val();
        var password = $("#password").val();
        var myKeyVals = { "UserName": userName, "Password": password }
        if (userName.length != 0 && password.length != 0) {
            $.ajax({
                type: 'POST',
                url: 'https://localhost:7048/api/ApplicationUser/Login',
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(myKeyVals)
                , success: (function (data) {
                    window.localStorage.setItem("token", data.token);
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                    window.location.href = "https://localhost:7048/admin/profile";
                })
                , error: function (xhr, ErrorText, thrownError) {
                    if (xhr.responseText == "password incorrect") {
                        $("#passwordError").css("display", "block");
                    }
                    else if (xhr.responseText != "password incorrect") {
                        $("#passwordError").css("display", "none");

                    }
                     if (xhr.responseText == "userName or password incorrect") {
                        $("#UPError").css("display", "block");
                    }
                    else {
                        $("#UPError").css("display", "none");

                    }
                }
            }) 
        }
         
     
      
    });
});