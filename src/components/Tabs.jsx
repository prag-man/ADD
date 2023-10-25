"use client"
import dynamic from "next/dynamic"
import LineChartTop3 from "./AreaChart.jsx"
import { HorizontalBarChartAllPledges } from "./HorizontalBarChart.jsx"
import { LineChartAge } from "./LineChart.jsx"
import { useState } from "react"
import FortuneWheel from "./FortuneWheel.jsx"

const Tabs = () => {

    const [toggle, setToggle] = useState(1)

    return <div className="flex flex-col mt-12 w-full">
        <div className="flex gap justify-center gap-20 px-20">
            <h5 className={`text-xl font-semibold py-2 px-4 ${toggle === 1 && 'bg-gray-200'} rounded-xl cursor-pointer`} onClick={(e)=>{
                e.preventDefault()
                setToggle(1)
                }}>Top 3 Pledges</h5>
            <h5 className={`text-xl font-semibold py-2 px-4 ${toggle === 2 && 'bg-gray-200'} rounded-xl cursor-pointer`} onClick={(e)=>{
                e.preventDefault()
                setToggle(2)
                }}>All Pedges</h5>
            <h5 className={`text-xl font-semibold py-2 px-4 ${toggle === 3 && 'bg-gray-200'} rounded-xl cursor-pointer`} onClick={(e)=>{
                e.preventDefault()
                setToggle(3)
                }}>Age Group</h5>
            <h5 className={`text-xl font-semibold py-2 px-4 ${toggle === 4 && 'bg-gray-200'} rounded-xl cursor-pointer`} onClick={(e)=>{
                e.preventDefault()
                setToggle(4)
                }}>Fortune Wheel</h5>
        </div>
        <div className="top-3 flex flex-col my-20">
            {toggle === 1 && <div className="w-1/2 flex mx-auto">
                <LineChartTop3 />
            </div> }
            {toggle === 2 && <div className="w-1/2 flex mx-auto">
                <HorizontalBarChartAllPledges />
            </div> }
            {toggle === 3 && <div className="w-1/2 flex mx-auto">
                <LineChartAge />
            </div> }
            {toggle === 4 && <div className="w-1/2 flex mx-auto">
                <FortuneWheel/>
            </div> }
        </div>
    </div>
}

export default Tabs