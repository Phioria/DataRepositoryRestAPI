exports.notFound = (req, res, next) => {
    res.status(404).send("Sorry, that path doesn't exist.");
}
