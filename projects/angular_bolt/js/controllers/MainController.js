app.controller('MainController', ['$scope', function($scope) {
  $scope.program = { 
    series: "Sherlock", 
    series_img: "img/sherlock.jpg", 
    genre: "Crime drama", 
    season: 3, 
    episode: "The Empty Hearse", 
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.", 
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00) };
  
  $scope.program2 = {
    series: "Vampire Diaries", 
    series_img: "http://vignette3.wikia.nocookie.net/harry-potter-vs-glee-and-vampire-diaries-2/images/0/02/Vampire_diaries_season_4-wide.jpg/revision/20130709151540", 
    genre: "Horror drama", 
    season: 8, 
    episode: "The Vampires Return", 
    description: "Long after many feared the end of all vampires, guess what? They're back. And they're thirsty. Mmm, human blood.", 
    datetime: new Date(2018, 11, 31, 23, 00, 00, 00) 
  };
}]);