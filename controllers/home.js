const home = async (req, res, next) => {
    // RENDER VIEW WITH CUSTOM PARAMETER
    res.render('index', { title: "Express" });
}

module.exports = home;
