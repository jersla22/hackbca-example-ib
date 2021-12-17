var express = require('express');
var router = express.Router();

const events_data = require('../data/dummy_projects')

/* GET events page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Projects', style: "tables", projects : projects_data});
});

router.get('/create', function(req, res, next) {
  res.render('projectform', {title: 'Create New Project', style: "newproject"})
})

router.get('/modify/:project_id', function(req, res, next) {
  let project_id = req.params.event_id;
  let project = projects_data.find(function(pt){ return pt.project_id == project_id});
  if (project === undefined ){
    next(); //pass along, send 404
  }
  else {
    res.render('projectform', { title: 'Modify Project', style: "newproject", project: project});
  }

})

router.get('/:project_id', function(req, res, next) {
  let project_id = req.params.project_id;
  let project = project_data.find(function(pt){ return pt.project_id == project_id});
  if (project === undefined ){
    next(); //pass along, send 404
  }
  else {
    res.render('project', { title: project.project_name, style: "tables", project: project});
  }
});

module.exports = router;
