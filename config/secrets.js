// export the dynamic secret that heroku will create/use

module.exports = {
    jwtSecret: process.env.JWT_SECRET || "Keep this on the DL..."
};
