import _ from "lodash";

Array.new = function (n, v) {
  return new Array(n).fill(v);
};

Array.range = function (start, end) {
  return _.range(start, end);
};

const sum = (d) => (d ? (acc, s) => acc + d(s) : (acc, s) => acc + s);
Array.prototype.sum = function (f) {
  return _.reduce(this, sum(f), 0);
};

Array.prototype.toNum = function (f) {
  return this.map((x) => Number(x));
};

Array.prototype.largest = function (n) {
  if (!n) return this.sort((a, b) => b - a)[0];
  return this.sort((a, b) => b - a).slice(0, n);
};

Array.prototype.smallest = function (n) {
  if (!n) return this.sort((a, b) => a - b)[0];
  return this.sort((a, b) => a - b).slice(0, n);
};

Array.prototype.uniq = function () {
  return _.uniq(this);
};
