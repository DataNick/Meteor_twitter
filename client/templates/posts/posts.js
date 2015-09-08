// Meteor.subscribe("posts"); can be here or in common.js file

Template.posts.helpers({
  posts: function(){
    return Posts.find({}, {sort:{createdAt: -1}});
  }
});