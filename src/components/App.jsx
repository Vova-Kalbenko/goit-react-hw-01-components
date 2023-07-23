import { UserProfile } from './userProfile/userProfile';
import  user  from './userProfile/user.json';
import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json';
import { Friends } from './friendsList/friendsList';
import friends from './friendsList/friends.json';
import { TransactionHistory } from './transactions/transactionsHistory';
import transaction from './transactions/transactions.json';
export const App = () => {
  return (
<div
style={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101'
}}
>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
      <Friends friends={friends}/>
      <TransactionHistory transactions={transaction}/>
      </div> 
  );
};


