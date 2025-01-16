import { FaLock} from "react-icons/fa"
import { FiPlus } from "react-icons/fi"

import { LuArrowRightLeft } from "react-icons/lu"


const Main = ({profile, setShowAdd}) => {
    return (

        <>
            <div className="p-3 bg-orange-100 rounded-lg shadow">
            <div className="flex gap-2 items-center ">
                    <div>
                        <img src="images/bitcoin.png" alt="btc" className="w-9" />
                    </div>
                    <div>
                        <div className="text-xs font-bold">Bitcoin</div>
                        <div className="my-text">Locked</div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-5">
                

                    <div className="flex items-center gap-2">
                    <FaLock className="text-red-700"/>
                    <div className="font-bold text-lg">{profile.btc_amount} BTC</div>
                    </div>

                    <div className="flex gap-3">
                        <button className="bg-orange-400 p-1 rounded text-white" onClick={() => setShowAdd(true)}><FiPlus /></button>
                        <button className="bg-yellow-400 p-1 rounded text-white"><LuArrowRightLeft /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main