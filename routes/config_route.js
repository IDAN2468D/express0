const indexR = require("./Index");
const usersR = require("./users");
const shopR = require("./shop");
const foodsR = require("./foods");
const appliancesR = require("./appliances");

exports.routesInit = (app) => {
    app.use("/", indexR)
    app.use("/appliances", appliancesR)
    app.use("/users", usersR)
    app.use("/shop", shopR)
    app.use("/foods", foodsR)

}