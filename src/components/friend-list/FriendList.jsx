import { Friend } from '../friend/Friend';

const FriendList = ({friends}) => (
  <div className='friend-list-wrapper'>
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <Friend
            avatar = {friend.avatar}
            name = {friend.name}
            isOnline = {friend.isOnline}
          />
        </li>
      ))}
    </ul>
  </div>
);

export { FriendList };
