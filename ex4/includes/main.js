(function(){
    var firstNameInput = $('input[name="fullName"]');
    var error = $('<span class="error">FullName must include a space</span>')
        .insertAfter(firstNameInput)
        .hide();
    firstNameInput.blur(function(){
        var space = /[" "]/.test($(this).val());
        if(!space)
            error.show();
        else
            error.hide('slow');
        

    });
    var password = $('input[name="pass"]');
    var passError = $('<span class="passError">Password must have at least one number</span>')
        .insertAfter(password)
        .hide();
    
    password.blur(function(){
        var validPass = /[0-9]/.test($(this).val());
        if(!validPass)
            passError.show();
        else
            passError.hide('slow');
    });
}());

