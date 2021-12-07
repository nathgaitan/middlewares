let admins = ['Ada', 'Greta', 'Vim', 'Tim'];

const access = (req,res,next) => {
    if (admins.includes(req.query.user)) {
        next();
    }
    else {
        res.render('errorAccess', { title : 'No posees privilegios de administrador' })
    }
}

module.exports = access;