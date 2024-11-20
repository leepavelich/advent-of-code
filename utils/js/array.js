import _ from "lodash";

// Create array of length n filled with value v
// Example: Array.new(3, 'x') => ['x', 'x', 'x']
Array.new = function (n, v) {
  return new Array(n).fill(v);
};

// Create array of numbers from start to end (exclusive)
// Example: Array.range(1, 4) => [1, 2, 3]
Array.range = function (start, end) {
  return _.range(start, end);
};

// Sum array elements, optionally with mapping function
// Example: [1,2,3].sum() => 6
// Example: [{v:1},{v:2}].sum(x => x.v) => 3
const sum = (d) => (d ? (acc, s) => acc + d(s) : (acc, s) => acc + s);
Array.prototype.sum = function (f) {
  return _.reduce(this, sum(f), 0);
};

// Convert array elements to numbers
// Example: ['1','2','3'].toNum() => [1,2,3]
Array.prototype.toNum = function () {
  return this.map(Number);
};

// Get n largest elements
// Example: [1,4,2,3].largest(2) => [4,3]
Array.prototype.largest = function (n) {
  if (!n) return this.sort((a, b) => b - a)[0];
  return this.sort((a, b) => b - a).slice(0, n);
};

// Get n smallest elements
// Example: [1,4,2,3].smallest(2) => [1,2]
Array.prototype.smallest = function (n) {
  if (!n) return this.sort((a, b) => a - b)[0];
  return this.sort((a, b) => a - b).slice(0, n);
};

// Get unique elements
// Example: [1,2,2,3].uniq() => [1,2,3]
Array.prototype.uniq = function () {
  return _.uniq(this);
};

// Count occurrences of each element
// Example: [1,2,2,3].frequency() => {1:1, 2:2, 3:1}
Array.prototype.frequency = function () {
  return _.countBy(this);
};

// Get all combinations of array elements of given length
// Example: [1,2,3].combinations(2) => [[1,2],[1,3],[2,3]]
Array.prototype.combinations = function (n) {
  return _.flatMap(_.range(0, this.length - n + 1), (i) =>
    _.map(this.slice(i + 1), (v) => [this[i], v])
  );
};

// Get product of all elements
// Example: [1,2,3,4].product() => 24
Array.prototype.product = function () {
  return this.reduce((a, b) => a * b, 1);
};

// Chunk array into smaller arrays of given size
// Example: [1,2,3,4,5].chunk(2) => [[1,2],[3,4],[5]]
Array.prototype.chunk = function (size) {
  return _.chunk(this, size);
};

// Rotate array by n positions
// Example: [1,2,3,4].rotate(1) => [4,1,2,3]
Array.prototype.rotate = function (n) {
  const normalizedN = ((n % this.length) + this.length) % this.length;
  return [...this.slice(-normalizedN), ...this.slice(0, -normalizedN)];
};

// Get intersection of arrays
// Example: [1,2,3].intersection([2,3,4]) => [2,3]
Array.prototype.intersection = function (arr) {
  return _.intersection(this, arr);
};

// Group elements by key
// Example: [{type:'A',val:1},{type:'B',val:2}].groupBy('type') 
// => {A:[{type:'A',val:1}],B:[{type:'B',val:2}]}
Array.prototype.groupBy = function (key) {
  return _.groupBy(this, key);
};

// Get median value
// Example: [1,3,5,2,4].median() => 3
Array.prototype.median = function () {
  const sorted = [...this].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? 
    sorted[mid] : 
    (sorted[mid - 1] + sorted[mid]) / 2;
};

// Zip arrays together
// Example: [1,2,3].zip(['a','b','c']) => [[1,'a'],[2,'b'],[3,'c']]
Array.prototype.zip = function (...arrays) {
  return _.zip(this, ...arrays);
};
