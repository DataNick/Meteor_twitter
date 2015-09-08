Meteor.publish("posts", function(){
  return Posts.find();
});

Meteor.publish("ProfileImages", function(){
  return ProfileImages.find();
});

Meteor.publish("UserImages", function(){
  return UserImages.find();
});
