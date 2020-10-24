export const defaultNoImage = "../images/movies-list/no-poster.jpg";
export const switchDate = (str) => {
  if (str) {
    return str.replace(/^(\d{4}).(\d{2}).(\d{2})/, "$3.$2.$1");
  } else {
    return "";
  }
};

export const switchImageFront = (e, str) => {
  if (str) {
    e.target.src = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${str}`;
  } else if (str === null) {
    e.target.src = defaultNoImage;
  }
};

export const switchImageBack = (e, str) => {
  if (str) {
    e.target.src = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${str}`;
  } else if (str === null) {
    e.target.src = defaultNoImage;
  }
};

export const sliceDate = (str) => {
  if (str) {
    let str2 = str.slice(0, 4);
    return str2;
  } else {
    return "";
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
