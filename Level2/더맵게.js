class Heap {
  arr = [];

  #reheapUp(index) {
    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.arr[index] < this.arr[parentIndex]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;
        this.#reheapUp(parentIndex);
      }
    }
  }

  insert(value) {
    const index = this.arr.length;
    this.arr.push(value);
    this.#reheapUp(index);
  }

  #reheapDown(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;

    if (leftIndex < this.arr.length) {
      const smaller =
        this.arr[rightIndex] < this.arr[leftIndex] ? rightIndex : leftIndex;
      if (this.arr[index] > this.arr[smaller]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[smaller];
        this.arr[smaller] = temp;

        this.#reheapDown(smaller);
      }
    }
  }

  remove() {
    if (this.arr.length === 0) return false;
    if (this.arr.length === 1) return this.arr.pop();

    const root = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.#reheapDown(0);

    return root;
  }
}

const solution = (scov, k) => {
  const heap = new Heap();
  let count = 0;

  scov.forEach((el) => heap.insert(el));

  while (heap.arr[0] < k && heap.arr.length > 1) {
    count++;
    heap.insert(heap.remove() + heap.remove() * 2);
  }

  return heap.arr[0] >= k ? count : -1;
};

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
console.log(
  solution([1, 1, 1, 1, 1, 1, 100, 100, 100, 100, 0, 0, 0, 0, 0], 10)
); // 10
console.log(solution([0, 2, 4], 12)); // 2
console.log(solution([1, 0, 0, 0], 3)); // -1
console.log(solution([1, 0, 0, 0], 2)); // 3
console.log(solution([10, 11, 12, 13], 10)); // 0
console.log(solution([10, 11], 1000)); // -1
console.log(solution([10, 11], 12)); // 1
console.log(solution([1, 2, 3], 45)); // -1
console.log(solution([0, 1], 2)); // 1
console.log(solution([7], 7)); // 0

// 효율성 테스트 실패 코드
const solution2 = (scov, k) => {
  const sortScov = scov.sort((a, b) => b - a);
  let count = 0;

  if (sortScov[sortScov.length - 1] >= k) return 0;

  while (sortScov.length > 1 && sortScov[sortScov.length - 1] < k) {
    const first = sortScov.pop();
    const second = sortScov.pop();
    const mix = first + second * 2;

    sortScov.push(mix);
    sortScov.sort((a, b) => b - a);

    count++;
  }

  if (sortScov[sortScov.length - 1] < k) return -1;
  return count;
};
