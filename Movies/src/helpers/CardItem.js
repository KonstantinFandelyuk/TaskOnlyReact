export const switchDate = (str) => {
  return str.replace(/^(\d{4}).(\d{2}).(\d{2})/, "$3.$2.$1");
};

export const switchImageFront = (e, str) => {
  e.target.src = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${str}`;
};

export const switchImageBack = (e, str) => {
  e.target.src = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${str}`;
};

export const sliceDate = (str) => {
  if (str) {
    let str2 = str.slice(0, 4);
    return str2;
  } else {
    return;
  }
};

// modalData.genres
// {
/* <canvas id="cnvs" width="400px" height="400px"></canvas>
var canvas = document.getElementById("cnvs");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 2; // толщина линии

ctx.arc(200, 200, 100, 10, Math.PI, true);
ctx.stroke(); */
// }
