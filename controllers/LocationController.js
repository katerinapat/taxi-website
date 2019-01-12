import Location from '../models/Location';

const locationController = {};

locationController.list = function(req, res) {
  Location.find({}).exec(function (err, locations) {
    if (err) {
      res.send('Error:', err);
    }
    
    res.send(locations);
  });
};

locationController.create = function(req, res) {
  const location = new Location(req.body);

  location.save(function(err, location) {
    if (err) return res.json(err);
    res.send(location);
  });
};

locationController.update = function(req, res) {
  const locationId = req.params._id;

  const options = {
    new: true,
    runValidators: true
  };

  Location.findByIdAndUpdate(
    locationId, 
    req.query, 
    options,  
    function(err, location) {
      if (err) return res.json(err);
      res.json(location);
    });
};

locationController.delete = function(req, res) {
  const locationId = req.params._id;

  Location.findByIdAndDelete(
    locationId, 
    function(err, location) {
      if (err) return res.json(err);
      res.json(location);
    });
};

module.exports = locationController;
