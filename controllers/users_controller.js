module.exports.profile= function(req,res){
    return res.render('users',{
        title: "users"
    });
}


//render the sign up page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"codeial | sign up"
    })
}

//render the sign in page
module.exports.signIn = function (req, res) {
    return res.render('user_sign_in', {
        title: "codeial | sign in"
    })
}