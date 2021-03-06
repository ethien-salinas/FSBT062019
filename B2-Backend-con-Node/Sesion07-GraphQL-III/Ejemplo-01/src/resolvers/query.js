import User from '../models/User';

const Query = {
  status: () => 'Welcome to GraphQL',
  users: (_, args, { currentUser }) => {
    if(!currentUser) {
      throw new Error('Unauthorized');
    } 
    return User.find().exec();
  },
  user: (_, { id }, { currentUser }) => {
    if(!currentUser) {
      throw new Error('Unauthorized');
    }
    return User.findOne({ _id: id }).exec();
  }
};

export default Query;
