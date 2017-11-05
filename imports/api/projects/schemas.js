import SimpleSchema from 'simpl-schema';
// Fields expected in project documents:
/*
  _id (ObjectId): automatically generated
  name (String): the name of the project
  url (String): the project repo URL
  isSource (Bool): indicates whether the repo is the source or a fork
  author (Object): object for author information
  - user (String): username of the Repo owner
  - url (String): URL for the repo owner's profile
  createdAt (Date): the date the project was created
  updatedAt (Date): the date the project was last updated
*/

// container for all schemas
export const ProjectSchemas = {};

// Subschema definition for project author
ProjectSchemas.ProjAuthor = new SimpleSchema({
  user: {
    type: String,
    max: 200,
    label: 'Project owner\'s username'
  },
  url: {
    type: String,
    max: 500,
    label: 'Project owner\'s web address',
    regEx: SimpleSchema.RegEx.Url
  }
});

// Main schema definition
ProjectSchemas.Project = new SimpleSchema({
  name: {
    type: String,
    label: 'Project name',
    max: 300
  },
  url: {
    type: String,
    label: 'Project URL',
    max: 500,
    regEx: SimpleSchema.RegEx.Url
  },
  isSource: {
    type: Boolean,
    label: 'Source or fork'
  },
  author: {
    type: ProjectSchemas.ProjAuthor,
    label: 'Author info'
  },
  createdAt: {
    type: Date,
    required: false
  },
  updatedAt: {
    type: Date
  }
});

// Schema for use with an ID only
ProjectSchemas.ExactId = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  }
});