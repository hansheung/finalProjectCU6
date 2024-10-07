function findInMountainArray(target, mountainArr) {
    const n = mountainArr.length;
    
    // Step 1: Find the peak of the mountain
    let peak = 0;
    for (let i = 1; i < n; i++) {
      if (mountainArr[i] > mountainArr[i - 1]) {
        peak = i;
      } else {
        break; 
      }
    }
  
    // Step 2: Search for the target in the increasing part
    for (let i = 0; i <= peak; i++) {
      if (mountainArr[i] === target) {
        return i;
      }
    }
  
    // Step 3: Search for the target in the decreasing part
    for (let i = peak + 1; i < n; i++) {
      if (mountainArr[i] === target) {
        return i;
      }
    }
  
    // Step 4: If target is not found, return -1
    return -1;
  }
  
 
  const mountainArr = [1, 3, 5, 7, 6, 4, 2];
  const target = 4;
  console.log(findInMountainArray(target, mountainArr));  // Output: 5
  