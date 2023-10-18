const movie =  {
  director: "Bong",
  releaseDate: "Sep 12, 2023",
  runningTime: "120m",
  genre: "Action",
  discountEvent : true,
  greeting : function(name) {
    console.log("Hi, " + name + "!");
  },
};

movie.greeting("mori");