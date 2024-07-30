
import { LuBellRing } from "react-icons/lu"


const Header = ({ setShowAdd, showAdd, HandleUser, AddMain, profile, btcReceieved, setBtcReceived, btcReceivedIn$, setBtcReceivedIn$, unlockedFee, setUnlockFee, timeLocked, setTimeLocked, setNotify}) => {
    return (
        <>
            <div className="flex items-center justify-between bg-white mb-5 p-3 rounded shadow">
                <div className="flex gap-2 items-center">
                    <img src={`${profile.profileurl ? `${profile.profileurl}` : `./public/images/user.PNG`}`} alt="profile" className="w-9 h-9 object-cover border-slate-700 border rounded-full" />
                    <div className="text-xs font-bold">Hi, {profile.username}</div>
                </div>
                <div className="relative" onClick={() => setNotify(true)}>
                    <button> <LuBellRing className="text-bold text-2xl" /></button>
                    <button className="bg-red-700 my-text px-1 rounded-full absolute bottom-5 left-3 text-white font-bold">{profile.notification_amount}</button>
                </div>
            </div>

            {showAdd && <div className="h-screen fixed top-0 left-0 w-full overflow-hidden my-bg">
                <div className="w-11/12 md:w-96 mx-auto p-3 overflow-y-auto h-screen my-scroll mb-20">
                   

                    <div className="bg-white p-2 mt-3">
                        <div className="text-sm text-center font-semibold mb-3">Enter User Details</div>

                        <form >
                            <label className="">
                                <input type="text" className="border w-full py-1 px-2 outline-none mb-1" onChange={HandleUser} name="username" />
                                <div className="text-xs mb-2">Enter name</div>
                            </label>
                            <label className="">
                                <input type="url" className="border w-full py-1 px-2 outline-none mb-1" onChange={HandleUser} name="profileurl" />
                                <div className="text-xs mb-2">Copy and paste your profile URL</div>
                            </label>
                            <label className="">
                                <input type="number" className="border w-full py-1 px-2 outline-none mb-1" onChange={HandleUser} name="btc_amount" />
                                <div className="text-xs mb-2">Enter BTC amount</div>
                            </label>
                            <label className="">
                                <input type="number" className="border w-full py-1 px-2 outline-none mb-1" onChange={HandleUser} name="notification_amount" />
                                <div className="text-xs mb-2">Enter Notification amount</div>
                            </label>
                            <label className="">
                                <input type="text" className="border w-full py-1 px-2 outline-none mb-1" onChange={HandleUser} name="history_date" />
                                <div className="text-xs mb-2">Enter History Date</div>
                            </label>





                        </form>
                    </div>

                    {/* ============= user details */}


                    <div className="bg-white p-2 mt-6">
                        <div className="text-sm text-center font-semibold mb-3">Enter History Details</div>

                        <form onSubmit={AddMain}>
                            <label className="">
                                <input type="number" className="border w-full py-1 px-2 outline-none mb-1" value={unlockedFee} onChange={(e) => setUnlockFee(e.target.value)} />
                                <div className="text-xs mb-2">Enter Unlock fee</div>
                            </label>
                            <label className="">
                                <input type="text" className="border w-full py-1 px-2 outline-none mb-1" onChange={(e) => setBtcReceivedIn$(e.target.value)} value={btcReceivedIn$} />
                                <div className="text-xs mb-2">Enter BTC amount received in Dollar</div>
                            </label>
                            <label className="">
                                <input type="number" className="border w-full py-1 px-2 outline-none mb-1" value={btcReceieved} onChange={(e) => setBtcReceived(e.target.value)} name="btc_amount" />
                                <div className="text-xs mb-2">Enter BTC amount in BTC format</div>
                            </label>
                            <label className="">
                                <input type="text" className="border w-full py-1 px-2 outline-none mb-1" value={timeLocked} onChange={(e) => setTimeLocked(e.target.value)} name="notification_amount" />
                                <div className="text-xs mb-2">Enter Time locked</div>
                            </label>

                            <button className="bg-blue-700 w-full text-white py-1 text-sm mb-3">Save</button>




                        </form>
                        <button className="bg-red-700 w-full text-white py-1 text-sm" onClick={() => setShowAdd(false)}>Close</button>
                    </div>
                </div>






            </div>}
        </>
    )
}

export default Header