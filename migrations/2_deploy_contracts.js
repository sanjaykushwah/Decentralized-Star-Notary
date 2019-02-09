const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary, "(Sitara)Star Notary Token", "SITARA");
};
