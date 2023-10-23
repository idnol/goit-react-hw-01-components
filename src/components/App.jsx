import { Card } from 'components/Card';
import user from '../user.json'

export const App = () => {
  return (
    <Card
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
