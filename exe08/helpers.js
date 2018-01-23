exports.registerHelpers = (hbs) => {
    hbs.registerHelper('staticMap', ([lng, lat]) =>   // méthode de handlebars
        `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=1.4`)
}