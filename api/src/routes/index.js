const { Router } = require("express");
const pokRouter = require("./router/pokallRouter");
const pokidRouter = require("./router/pokidRouter");
const allTypes = require("./router/allTypes");
const creationpokRouter = require("./router/creationpokRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokRouter);
router.use("/pokemons", pokidRouter); //id
router.use("/types", allTypes);
router.use("/pokemons", creationpokRouter);

module.exports = router;
