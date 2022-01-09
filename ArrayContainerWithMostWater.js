// function getMaxWaterContainer(heights) {
//   let maxArea = 0;

//   for (let p1 = 0; p1 < heights.length; p1++) {
//     for (let p2 = p1 + 1; p2 < heights.length; p2++) {
//       const height = Math.min(heights[p1], heights[p2]);
//       const width = p2 - p1;
//       const area = height * width;

//       maxArea = Math.max(maxArea, area);
//     }
//   }

//   return maxArea;
// }

function getMaxWaterContainer(heights) {
  let p1 = 0,
    p2 = heights.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;

    maxArea = Math.max(maxArea, area);
    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}

console.log(getMaxWaterContainer([7, 1, 9, 2, 3, 10]));
