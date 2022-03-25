const teamController = require('../controllers/team.controller');
const Team = require('../models/team.model');

module.exports = (app) =>{ // these exports will be called by the server.js

    app.get('/api/team-manager', teamController.findAllTeams);

    app.post('/api/team-manager', teamController.createNewTeam); // while the path '/api/team-manager' is the same as the one above, we have a different http request here.

    app.get('/api/team-manager/:id', teamController.findOneTeam); // this 'id' value must match the corresponding parameters in the controller file for the particular function; at the end of req.params.id <--- this 'id'. Can be anything on both sides but MUST match.

    app.put('/api/team-manager/:id', teamController.updateTeam);

    app.delete('/api/team-manager/:id', teamController.deleteOneTeam);
}