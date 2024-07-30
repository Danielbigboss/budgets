
import './App.css';
import { useState } from 'react';
import Main from './components/Main';
import History from './components/History';
import Header from './components/Header';
import Notification from './components/Notification';

function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [main, setMain] = useState([]);
  const [btcReceieved, setBtcReceived] = useState('')
  const [btcReceivedIn$, setBtcReceivedIn$] = useState('')
  const [unlockedFee, setUnlockFee] = useState('')
  const [timeLocked, setTimeLocked] = useState('')
  const [notify, setNotify] = useState(false);
  const [profile, setProfile] = useState({
    username: '',
    profileurl: '',
    btc_amount: '',
    notification_amount: '',
    history_date: ''
  })


  const AddMain = (e) => {
    e.preventDefault();
   
    setMain([...main,
    {
      btcReceieved: btcReceieved,
      unlockedFee: unlockedFee,
      btcReceivedIn$: btcReceivedIn$,
      timeLocked: timeLocked
    }
    ])
  }
  const HandleUser = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    })
  }
  return (
    <>
      <div className="w-11/12 md:w-96 mx-auto relative mt-5 overflow-x-hidden" >
        <Header setShowAdd={setShowAdd} HandleUser={HandleUser} showAdd={showAdd} profile={profile} btcReceieved={btcReceieved} setBtcReceived={setBtcReceived} setBtcReceivedIn$={setBtcReceivedIn$} unlockedFee={unlockedFee} setUnlockFee={setUnlockFee} timeLocked={timeLocked} setTimeLocked={setTimeLocked} AddMain={AddMain} setNotify={setNotify}/>

        <Main profile={profile} setShowAdd={setShowAdd}/>
        <History profile={profile} main={main}  />
        {notify && <Notification setNotify={setNotify} profile={profile} btcReceieved={btcReceieved}/>}
      </div>
    </>
  )
}

export default App;
