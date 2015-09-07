//Profile Images collection
ProfileImages = new FS.Collection("ProfileImages", {
  stores: [new FS.Store.GridFS("ProfileImages")]
});

UserImages = new Mongo.Collection("UserImages");

Posts = new Mongo.Collection("posts");

var Schemas = {};

Schemas.Post = new SimpleSchema({
      body: {
    type: String,
    max: 500
  },
  userId: {
    type: String
  },
  username: {
    type: String
  },
  createdAt: {
    type: Date
  }
});

Posts.attachSchema(Schemas.Post);