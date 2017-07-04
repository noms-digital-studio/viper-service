const ingester = require('../datasources/ingester');
const log = require('../../server/log');

module.exports.doIngest = (req,res) => {
  res.send(202);
  ingester.ingest(req.db)
    .then((success) => {
      log.info(success);
    },
    (fail) => {
      log.err(fail);
    }
  );
};
