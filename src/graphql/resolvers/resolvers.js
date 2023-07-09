import { Friend } from '../../models/Friend';
import { Alien } from '../../models/Alien';

const resolvers = {
  Query: {
    getFriends: async () => {
      return await Friend.find({});
    },
    getOneFriend: async (root, { id }) => {
      return await Friend.findById(id)
    },
    getAliens: async () => {
      return await Alien.findAll();
    },
    getOneAlien: async (root, { id }) => {
      return await Alien.findById(id)
    }
  },

  Mutation: {
    createFriend: async (root, { input }) => {
      try {
        return await Friend.create(input);
      } catch (err) {
        throw new Error('Error creating friend.');
      }
    },

    updateFriend: async (root, { input }) => {
      try {
        return await Friend.findOneAndUpdate({ _id: input.id }, input, { new: true });
      } catch (err) {
        throw new Error('Error updating friend.');
      }
    },

    deleteFriend: async (root, { id }) => {
      try {
        const deleted = await Friend.findOneAndDelete({ _id: id });
        if (!deleted) {
          throw new Error('Error deleting friend');
        }

        return "Successfully deleted friend.";
      } catch (err) {
        throw new Error('Error deleting friend.');
      }
    },
  },
};

export { resolvers };