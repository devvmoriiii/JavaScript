const movie =  {
  director: "Bong",
  releaseDate: "Sep 12, 2023",
  runningTime: "120m",
  genre: "Action",
  discountEvent : true,
};
console.log(movie);

// 객체 값 가져오기
console.log(movie.genre);
console.log(movie["releaseDate"]);

// 객체 값 수정하기
movie.releaseDate = "Dec 25, 2023";
console.log(movie);

// 객체 요소 추가하기
movie.price = "15$";
console.log(movie);