import { Friend } from '../friend/Friend';
import PropTypes from 'prop-types';
import css from './FriendLIst.module.css'

const FriendList = ({friends}) => (
  <div className='friend-list-wrapper'>
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.friendListItem} key={friend.id}>
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }))
};
export { FriendList };
