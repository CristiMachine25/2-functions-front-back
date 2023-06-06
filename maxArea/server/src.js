/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0 ;
    let l = 0, r = height.length - 1;
    while(l < r){
        area = (r-l) * Math.min(height[r], height[l]);
        maxArea = Math.max(maxArea, area);
        if(height[r] > height[l])
            l++;
        else
            r--;
    }
    return maxArea;
};

module.exports = {maxArea};


