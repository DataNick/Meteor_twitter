Meteor.startup(function () {
  AccountsEntry.config({
    homeRoute: '/',                    // mandatory - path to redirect to after sign-out
    dashboardRoute: '/',      // mandatory - path to redirect to after successful sign-in
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  })
});

Template.registerHelper('getProfileImg', function(userId){
  var imgUrl = UserImages.findOne({userId: userId}).image;
  return imgUrl;
});