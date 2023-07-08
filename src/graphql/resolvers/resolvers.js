import { Friend } from '../../models/Friend';

export const resolver = {
    Query: {
        getFriend: ({ id }) => {
          return new Friend(id, friendDatabase[id]);
        },
    },
    Mutation: {
        createFriend: ({ input }) => {
          const newFriend = new Friend({
            firstName: input.firstName,
            lastName: input.lastName,
            gender: input.gender,
            age: input.age,
            language: input.language,
            emails: input.emails
          });

          newFriend.id = newFriend._id;

          return new Promise((resolve, object) => {
            newFriend.save((err) => {
              if (err) reject(err)
              else resolve(newFriend)
            })
          });
        },
    },
};