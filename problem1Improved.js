//Time: O(n)
//Space: O(1)
function trap(height) {
    l = 0
    r = height.length -1
    leftMax = height[l]
    rightMax = height [r]
    result = 0
    while (l < r) {
        if(leftMax < rightMax){
            l += 1
            leftMax = Math.max(leftMax, height[l])
            result += leftMax - height[l]
        }else{
            r -=1
            rightMax = Math.max(rightMax, height[r])
            result += rightMax - height[r]
        }

    }

    return result;
}

let heights = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(heights)); // Output: 6
