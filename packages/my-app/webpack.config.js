const presetReact = require("preset-react");

module.exports = ({ mode }) => {
  return {
    presets: [presetReact({ mode })],
  };
};
