/**
 * This route is intended to supply quick info to the
 * client, for syncing up state.
 * @param {object} req
 * @param {object} res
 */
const sync = function(req, res) {

  const pump = {
    isEnergized: true,
    isEnabled: true
  };

  const fan = {
    isEnergized: false,
    isEnabled: false
  };

  const light = {
    isEnergized: false,
    isEnabled: true
  };

  const equipment = { pump, fan, light };
  res.json(equipment);
};

export { sync };