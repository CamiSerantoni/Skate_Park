export const vistaHome = ( req , res) => {
    res.render("home", {
        layout:"main",
        title : "Bienvenidos a Skate Park",
})
}