const router = require('express').Router();
const { Character, Dragon } = require('../../models');

router.get('/', (req, res) => {
    Character.findAll().then(characterData => {
        res.json(characterData);
    });
});

router.post('/', (req, res) => {
    Character.create(req.body)
        .then(newCharacter => {
            res.json(newCharacter);
        })
        .catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
    const characterId = req.params.id;
    Character.findByPk(characterId, {
        include: [
            {
                model: Dragon,
                as: 'trained_dragons'
            },
            {
                model: Dragon,
                as: 'rides'
            }
        ]
    }).then(characterData => {
        res.json(characterData);
    });
});

router.put('/:id', (req, res) => {
    const characterId = req.params.id;
    Character.update(req.body,
        {
            where: {
                id: characterId
            }
        })
        .then(updatedCharacter => res.json(updatedCharacter))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

router.delete('/:id', (req, res) => {
    const characterId = req.params.id;
    Character.destroy({
        where: {
            id: characterId
        }
    })
        .then(deletedResult => res.json(deletedResult))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;