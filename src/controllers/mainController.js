module.exports = {
    index : (req,res) => {
        res.render('index');
    },
    products : (req,res) => {
        res.render('products');
    },
    about : (req,res) => {
        res.render('about');
    },
    contact : (req,res) => {
        res.render('contact');
    },
    register : (req,res) => {
        res.render('register');
    },
    login : (req,res) => {
        res.render('login');
    },
    admin : (req,res) => {
        res.render('admin/index', {
            user : req.query.user
        });
    }
}