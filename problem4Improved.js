function findInMountainArray(target, mountainArr) {
    const n = mountainArr.length;

    // Step 1: Find the peak of the mountain array
    let left = 0;
    let right = n - 1;
    let peak = 0;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (mountainArr[mid] < mountainArr[mid + 1]) {
            left = mid + 1; // the peak is to the right
            peak = mid + 1;
        } else {
            right = mid; // the peak is to the left or is the mid itself
        }
    }

    // Step 2: Search in the left (increasing) part
    left = 0;
    right = peak;
    while (left <= right) {
        const midIdx = Math.floor((left + right) / 2);
        midNum = mountainArr[midIdx];
        if (midNum === target) {
            return midIdx;
        } else if (midNum < target) {
            left = midIdx + 1;
        } else {
            right = midIdx - 1;
        }
    }

    // Step 3: Search in the right (decreasing) part
    left = peak + 1;
    right = n - 1;
    while (left <= right) {
        const midIdx = Math.floor((left + right) / 2);
        midNum = mountainArr[midIdx];
        if (midNum === target) {
            return midIdx;
        } else if (midNum < target) {
            right = midIdx - 1;
        } else {
            left = midIdx + 1;
        }
    }

    // Step 4: If not found, return -1
    return -1;
}


const mountainArr = [1, 3, 5, 7, 6, 4, 2];
const target = 4;
console.log(findInMountainArray(target, mountainArr)); // Output: 5
