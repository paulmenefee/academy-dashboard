const router = require('express').Router();
let Cohort = require('../models/cohort.model');

router.route('/').get((req, res) => {
    Cohort.find()
        .then(cohorts => res.json(cohorts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newCohort = new Cohort({
        username,
        description,
        duration,
        date,
    });

    newCohort.save()
        .then(() => res.json('Cohort added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});     

router.route('/:id').get((req, res) => {
  Cohort.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Cohort.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Cohort.findById(req.params.id)
    .then(cohort => {
      cohort.username = req.body.username;
      cohort.description = req.body.description;
      cohort.duration = Number(req.body.duration);
      cohort.date = Date.parse(req.body.date);

      cohort.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;