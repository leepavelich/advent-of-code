import _ from "lodash";

const sum = (d) => (d ? (acc, s) => acc + d(s) : (acc, s) => acc + s);

Array.prototype.sum = function (f) {
  return _.reduce(this, sum(f), 0);
};
