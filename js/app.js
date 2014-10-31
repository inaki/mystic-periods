angular.module('cycles', ['ui.bootstrap', 'angularMoment'])

  .controller('mainCtrl', ['$scope', function($scope){


  $scope.periods = {
      firstPeriod: 'Push self forward with help from influential people; advance your own interests; seek favors, honors, help or recognition; building reputation or self-promotion in the public. Advertising for your business is best started or changed in this cycle. This is the time to step forward into the limelight, to become "visible" personally or professionally. Submit grant proposals, apply for job, submit a manuscript to a publisher, enter schooling, or other endeavors which will move yourself forward. Help is available from people and your guides, just by asking for it, but you must have faith that it is being delivered because the way in which help comes can often be seen only in retrospect. ',
      secondPeriod: 'Short term activities only; short trips of immediate importance are favorable; a good time to move your home or business; a period for changes which are quick and soon over. Brief projects, short courses, quick trips. An excellent period for dealing with things of a liquid or changeable nature. Unfavorable time to loan or borrow money or to gamble or speculate. Long term projects should not be started during this period.',
      thirdPeriod: 'Building business & accomplishment; large surge of energy; attention to the physical plane. Good time to start long-term projects, but be ware of taking on too much at one time due to the restless energy that is prevalent during this time. A good time to deal with obstacles, adversaries, or enemies which have been in the path, but don\'t do it with contracts, papers, agreements. Unfavorable period for dealing with women. Quarrels, arguments, and business strifes may occur, so avoid them because they are not apt to end very successfully for any one involved. A good time for sales or persuasion depending on firery oratory.',
      fourthPeriod: 'Mental and psychic energy strongest; vulnerable to loss or thievery. Excellent period for mental creativity of books, business schemes, and other matters requiring a fertile mind, quick thinking, and smooth-flowing language. A time of thoughts and ideas and an excellent phase for planning, especially long term ventures. A good time for acting on intuition or hunches. Can become nervous and restless. Beware of deception and falsehood coming your way during this period. Good time for study and absorption of special knowledge; not a good time to enter into serious relationship, hire employees, return from a long trip, buy properties. ',
      fifthPeriod: 'Success period, time of completion. Begin a long journey, either inside yourself or out in the world. Successful completion of things with which we have been laboring; or things we have planned or put into action. A time of personal affairs expanding, growing, or increasing in prosperity. A time of higher-order ideas such as law, benevolence, honesty. A good time to begin a long journey. Metaphysical or spiritual studies do well now. This is the phase to work on deep personal issues and clean house from old wounds you may have been hanging on to. Release and let go. This cycle is a time for "turning a corner" or taking a new path. ',
      sixthPeriod: 'Good time for speculative transactions; pleasure, relaxation. Holiday period of the year. A time for dealing with aesthetic and pleasurable things of life, such as art, music, poetry, personal adornments, perfumes, incense, flowers, etc. Short journeys ok, but not long voyages. Fun, play, recreation, vacation time is most favorable in this cycle. Redecorate a room, buy something pretty, make your surroundings more aesthetically pleasing. ',
      seventhPeriod: 'Critical, disruptive phase, breaking down to prepare for building; impulsiveness brings disaster, don\'t start new projects during this phase. Things which have been hanging or about to end or disrupt will do so now. The mind can become despondent, discouraged, or pessimistic; if this attitude is allowed to affect business actions, it will bring a disastrous result. Think before acting. Impulsiveness will bring disaster. It is best to hold important decisions or actions until after one\'s birthday. A good time for dealing with real estate and things of the Earth, or with persons in business relating to the earth, such as agriculture, mining. The most unfavorable period of the year for starting anything new or launching a new business. Use this phase to rest, recuperate, regenerate, and prepare for the new cycle of activity and energy which starts with your birthday. '
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  }])

  .filter('period1', function(){
    return function(input){
      return moment(input).add(0, 'days').format("MMM DD") + " - " + moment(input).add(53, 'days').format("MMM DD");
    }
  })
  .filter('period2', function(){
    return function(input){
      return moment(input).add(54, 'days').format("MMM DD") + " - " + moment(input).add(105, 'days').format("MMM DD");
    }
  })
  .filter('period3', function(){
    return function(input){
      return moment(input).add(106, 'days').format("MMM DD") + " - " + moment(input).add(157, 'days').format("MMM DD");
    }
  })
  .filter('period4', function(){
    return function(input){
      return moment(input).add(160, 'days').format("MMM DD") + " - " + moment(input).add(209, 'days').format("MMM DD");
    }
  })
  .filter('period5', function(){
    return function(input){
      return moment(input).add(210, 'days').format("MMM DD") + " - " + moment(input).add(261, 'days').format("MMM DD");
    }
  })
  .filter('period6', function(){
    return function(input){
      return moment(input).add(262, 'days').format("MMM DD") + " - " + moment(input).add(313, 'days').format("MMM DD");
    }
  })
  .filter('period7', function(){
    return function(input){
      return moment(input).add(314, 'days').format("MMM DD") + " - " + moment(input).add(365, 'days').format("MMM DD");
    }
  });
