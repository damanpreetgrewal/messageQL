import UserResolvers from './user';
import merge from 'lodash.merge';

const resolvers = merge({}, UserResolvers);

export default resolvers;
