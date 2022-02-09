const pool = require('../config/database');

module.exports = {
    example: (req, res, next) => {
        console.log("Exemple de controlleur");

        if (true) { // changer en false pour tester le second cas de figure
            return res.status(400).send("erreur example1")
        }
        return next()
    },
    example2: (req, res) => {
        console.log('Exemple de controlleur 2')
        if (true) { // changer en false pour tester le second cas de figure
            return res.status(400).send("erreur example2")
        }
        return res.status(200).send('ok')
    },
    selectionC: async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('Call selectionC(1)');
            console.log(result);
            return res.status(200).json({ success: result })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }
    },
    selectionV: async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('Call selectionV(1)');
            console.log(result);
            return res.status(200).json({ success: result })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }
    },
    selectionP: async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('Call selectionP(1)');
            console.log(result);
            return res.status(200).json({ success: result })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }
    },
    selectionCm: async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('Call selectionCm(1)');
            console.log(result);
            return res.status(200).json({ success: result })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }
    },
    selectionLC: async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('Call selectionLC(1)');
            console.log(result);
            return res.status(200).json({ success: result })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }
    },
}