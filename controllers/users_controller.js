module.exports.profile= function(req,res){
    return res.render('users_profile',{
        title: "user profile"
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


//get the sign_up dat
module.exports.create=function(req,res){
    //todo
}

module.exports.createSession = function (req, res) {
    //todo
}