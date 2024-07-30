import { IoWarning } from "react-icons/io5"


const Notification = ({setNotify, profile, btcReceieved}) => {

    return (
        <>
            <div>
                <div className="h-screen fixed top-0 left-0 w-full overflow-hidden my-bg flex items-center justify-center">
                    <div className="bg-white w-11/12 md:w-96 mx-auto p-3 rounded-2xl">
                        <div className="text-center">
                            <button className=""> <IoWarning className="text-red-700 text-6xl" /></button>
                            <div className="font-bold mb-3">Bitcoin Locked</div>
                            <div className="text-xs">Dear user <b>{profile.username}</b>, Your Bitcoin Deposition of {btcReceieved} BTC has been locked due to the server maintainance and updates. You are required to pay some fees. <span className="underline text-blue-500">Learn More</span></div>

                        </div>
                        <button className="mt-5 text-xs bg-blue-700 text-white font-bold w-full py-2 " onClick={() => setNotify(false)}>Okay </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification