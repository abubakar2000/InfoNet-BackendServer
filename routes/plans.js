var express = require('express');
var router = express.Router();

let plans = [
    {
        title: "Starter",
        subtitle: "Cheap Hosting Plan",
        price: 1.99,
    },
    {
        title: "Month plan",
        subtitle: "Good Value Hosting Plan",
        price: 6.99,
    },
    {
        title: "Deluxe",
        subtitle: "Overall Price Saver Hosting Plan",
        price: 8.99,
    },
]

let packages = [
    {
        name: "1 Website",
        present: true,
        planName: "Starter",
    },
    {
        name: "30 GB Storage",
        present: true,
        planName: "Starter",
    },
    {
        name: "Unmetered bandwidth",
        present: true,
        planName: "Starter",
    },
    {
        name: "Free Email",
        present: true,
        planName: "Starter",
    },
    {
        name: "No MYSQL Support",
        present: false,
        planName: "Starter",
    },
    {
        name: "Full 24/7 Support",
        present: true,
        planName: "Starter",
    },
    // ------------
    {
        name: "1 Website",
        present: true,
        planName: "Month plan",
    },
    {
        name: "100 GB space",
        present: true,
        planName: "Month plan",
    },
    {
        name: "Unlimited bandwidth",
        present: true,
        planName: "Month plan",
    },
    {
        name: "100 email accounts",
        present: true,
        planName: "Month plan",
    },
    {
        name: "10 MYSQL database",
        present: true,
        planName: "Month plan",
    },
    {
        name: "Full friendly 24/7 Support",
        present: true,
        planName: "Month plan",
    },
    // --------------
    {
        name: "Unlimited Websites",
        present: true,
        planName: "Deluxe",
    },
    {
        name: "Unlimited Space",
        present: true,
        planName: "Deluxe",
    },
    {
        name: "Unlimited bandwidth",
        present: true,
        planName: "Deluxe",
    },
    {
        name: "500 email accounts",
        present: true,
        planName: "Deluxe",
    },
    {
        name: "25 MYSQL database",
        present: true,
        planName: "Deluxe",
    },
    {
        name: "Full friendly 24/7 Support",
        present: true,
        planName: "Deluxe",
    },
]

router.get('/', function (req, res, next) {
    res.send('plans');
});

router.get('/plans', (req, res) => {
    res.send(plans)
})

// Add Plans to Plan Table
router.post('/addplan', (req, res) => {
    plans.push({
        title: req.body.title,
        subtitle: req.body.subtitle,
        price: req.body.price,
    })
    res.send("ok")
})
// Delete Plans from Plan Table
router.post('/deleteplan', (req, res) => {
    plans = plans.filter(p => p.title !== req.body.title)
    packages = packages.filter(p => p.planName !== req.body.title)
    console.log(plans);
    console.log(packages);
    res.send("ok")
})
// Add to the package table
router.post('/addpkg', (req, res) => {
    packages.push({
        name: req.body.name,
        present: req.body.present,
        planName: req.body.planName,
    })
    console.log(packages)
    res.send("ok")
})
// Add to the package table
router.post('/delpkg', (req, res) => {
    console.log(req.body.planName);
    console.log(req.body.name);
    packages = packages.filter(p => p.name !== req.body.name)
    console.log(packages);
    res.send("ok")
})



router.get('/packages', (req, res) => {
    res.send(packages)
})

module.exports = router;
