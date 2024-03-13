import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    const books =
        [{
            id: 1,
            name: "13 numaralı oda"
        },
        {
            id: 2,
            name: "Cinayet Defteri"
        }
        ]
    res.json(books);
});

export default router;  