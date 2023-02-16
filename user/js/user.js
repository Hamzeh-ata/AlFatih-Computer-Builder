$(document).ready(function () {
        console.log(userName)
        $.ajax({
            type: 'GET',
            url: 'https://localhost:7048/api/user',
            dataType: 'json',
            contentType:'application/json',
            success: function (data) {
                $.each(data, function (index, val) {
                    console.log(val.role);
                });
                
            }
    });
});