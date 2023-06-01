const { buildSchema } = require("graphql");

const schema = buildSchema(
  `
    type Task {
      id: ID!
      title: String!
      description: String!
      tags: [String]!
      done: Boolean!
    }

    type Query {
      getTodoTasks: [Task]! 
      getDoneTasks: [Task]! 
      getTask(id: ID!): Task 
      findTasks(tags: [String]!): [Task]! 
    }

    input CreateTaskInput {
      title: String! 
      description: String! 
      tags: [String]! 
    }

    input UpdateTaskInput { 
      title: String!
      description: String! 
      tags: [String]! 
      done: Boolean! 
    }

    type Mutation {
      createTask(input: CreateTaskInput!): Task!
      updateTask(id: ID!, input: UpdateTaskInput!): Task! 
      deleteTask(id: ID!): Boolean
    }
  `
);

module.exports = schema;
