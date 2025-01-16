import { useState } from "react"
import { FaArrowDown, FaUnlock } from "react-icons/fa"
import { FaLock } from "react-icons/fa6"


const History = ({ profile, main }) => {

    return (
        <>
            <div className="mt-3">
                <div className="text-xs">Transactions</div>
                <div className="mt-2 bg-white shadow">
                    <div className="p-3 border-b flex justify-between items-center">
                        <div className="my-text font-semibold">{profile.history_date}</div>
                        <div className="my-text font-semibold"> <span className="text-red-400">OUT</span> $...</div>
                    </div>
                    {/* ============== */}
                    {main.length > 0 ? <>{main.map((item, index) => {
                       return <div key={index}>
                            <div className="flex items-center justify-between p-3 border-b">
                                <div className="flex gap-2 items-center">
                                    <button className="bg-red-600 text-white p-2 rounded-full">   <FaUnlock /></button>
                                    <div>
                                        <div className="my-text  font-bold">Unlock fee</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-red-700 text-end">${item.unlockedFee}</div>
                                    <div className="my-text text-slate-500 font-semibold">9:30 pm</div>
                                </div>

                            </div>
                            <div className="flex items-center justify-between p-3 border-b">
                                <div className="flex gap-2 items-center">
                                    <button className="bg-red-100 text-white p-2 rounded-full">   <FaLock /></button>
                                    <div>
                                        <div className="my-text  font-bold">Bitcoin locked</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-red-100 text-end">${item.btcReceivedIn$}</div>
                                    <div className="my-text text-slate-500 font-semibold">9:30 pm</div>
                                </div>

                            </div>
                            <div>
                                <div className="flex items-center justify-between p-3 border-b">
                                    <div className="flex gap-2 items-center">
                                        <button className="bg-green-600 text-white p-2 rounded-full">   <FaArrowDown /></button>
                                        <div>
                                            <div className="my-text  font-bold">Received</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-green-600 text-end ">+${item.btcReceivedIn$}</div>
                                        <div className="my-text font-semibold text-slate-500">{item.btcReceieved} BTC</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    })}</>

                        : <div className="text-xs text-center py-3">Add Your work</div>}

                </div>
            </div>
        </>
    )
}

export default History