function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function () {
    returns "No, I must disagree"
  }
  this.approve = function () {
    returns "You can do that!"
  }
  this.doCharity = function () {
    returns "I like to help people."
  }
  this.releasePressStatement = function () {
    returns "You will see great things from Scuber."
  }
  this.sayHi = function () {
    returns `Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.`
  }
}