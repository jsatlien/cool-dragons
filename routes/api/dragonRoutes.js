const router = require('express').Router();
const { Dragon, Character } = require('../../models');

router.get('/', (req, res) => {
    Dragon.findAll().then(dragonData => {
        res.json(dragonData);
    });
});

router.post('/', (req, res) => {
    Dragon.create(req.body)
        .then(newDragon => {
            res.json(newDragon);
        })
        .catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
    const dragonId = req.params.id;
    Dragon.findByPk(dragonId, {
        include: [{ model: Character }]
    }).then(dragonData => {
        res.json(dragonData);
    });
});

router.put('/:id', (req, res) => {
    const dragonId = req.params.id;
    Dragon.update(req.body,
        {
            where: {
                id: dragonId
            }
        })
        .then(updatedDragon => res.json(updatedDragon))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

router.delete('/:id', (req, res) => {
    const dragonId = req.params.id;
    Dragon.destroy({
        where: {
            id: dragonId
        }
    })
        .then(deletedResult => res.json(deletedResult))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;