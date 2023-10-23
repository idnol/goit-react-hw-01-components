import { User } from './user/User';
import { StatisticList } from './statistic-list/StatisticList.jsx'
import { FriendList } from './friend-list/FriendList';
import { TransactionList } from './transaction-list/TransactionList';
import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'


export const App = () => {
  return (
    <div className="container">
      <div className='sidebar'>
        <User
          username = {user.username}
          tag = {user.tag}
          location = {user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <StatisticList statistics={data} />
        <FriendList friends={friends} />
      </div>
      <TransactionList transactions={transactions} />
    </div>

  );
};
