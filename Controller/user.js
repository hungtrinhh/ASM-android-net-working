const home = async (req, res, next) => {
    res.json({mame: "hung"})

}
const redirectTohome = async (req, res, next) => {
    res.redirect("/users/")
}


module.exports = {
    home,
    redirectTohome

}