"use client"
import dynamic from "next/dynamic"
import LineChartTop3 from "./AreaChart.jsx"
import { HorizontalBarChartAllPledges } from "./HorizontalBarChart.jsx"
import { LineChartAge } from "./LineChart.jsx"
import { useEffect, useState } from "react"
import FortuneWheel from "./FortuneWheel.jsx"
import database from "../utils/Firebase.js"
import { ref, onValue } from 'firebase/database'
import { all } from "axios"


const Tabs = () => {

    const [toggle, setToggle] = useState(1)
    const [entries, setEntries] = useState([]);
    const [AllPledges, setAllPledges] = useState({})
    const [ageGroup, setAgeGroup] = useState([])
    const [Top3, setTop3] = useState({})
    let TempTop3= ''

    useEffect(()=>{
        const entriesRef = ref(database, '/entries');
        const unsubscribe = onValue(entriesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
              const entriesArray = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
              setEntries(entriesArray);
              let tempPledesList = entriesArray.map((entry)=>entry.data.pledges)
              tempPledesList.forEach((subList)=>{
                subList.forEach((pledge)=>{
                    setAllPledges((prev)=>({
                        ...prev,
                        [pledge] : (AllPledges[pledge] || 0) + 1
                    }))
                })
              })
              let tempAgeList = entriesArray.map((entry)=>entry.data.age)
              tempAgeList.forEach((age)=>{
                    setAgeGroup((prev)=>({
                        ...prev,
                        [age] : (ageGroup[age] || 0) + 1,
                    }))
              })
              
            } else {
              setEntries([]);
            }
          });
        return () => unsubscribe();
    },[])

    TempTop3 = Object.fromEntries(Object.entries(AllPledges).sort((a, b) => b[1] - a[1]).slice(0, 3))

    return <div className="flex flex-col mt-12 w-full">
        <div className="flex gap justify-center items-center md:gap-20 px-5 md:px-20">
            <h5 className={`md:text-xl text-sm font-semibold md:py-2 py-1 px-2 md:px-4 ${toggle === 1 && 'bg-[#B99976] bg-opacity-50'} rounded-xl cursor-pointer`} onClick={(e)=>{
                e.preventDefault()
                setToggle(1)
                }}>Top 3 Pledges</h5>
            <h5 className={`md:text-xl text-sm font-semibold md:py-2 py-1 px-2 md:px-4 ${toggle === 2 && 'bg-[#B99976] bg-opacity-50'} rounded-xl cursor-pointer`} onClick={(e)=>{
                e.preventDefault()
                setToggle(2)
                }}>All Pedges</h5>
            <h5 className={`md:text-xl text-sm font-semibold md:py-2 py-1 px-2 md:px-4 ${toggle === 3 && 'bg-[#B99976] bg-opacity-50'} rounded-xl cursor-pointer`} onClick={(e)=>{
                e.preventDefault()
                setToggle(3)
                }}>Age Group</h5>
            <h5 className={`md:text-xl text-sm font-semibold md:py-2 py-1 px-2 md:px-4 ${toggle === 4 && 'bg-[#B99976] bg-opacity-50'} rounded-xl cursor-pointer`} onClick={(e)=>{
                e.preventDefault()
                setToggle(4)
                }}>Fortune Wheel</h5>
        </div>
        <div className="top-3 flex flex-col md:my-20 my-10">
            {toggle === 1 && <div className="md:w-1/2 h-52 w-full px-5 flex mx-auto">
                {/* {console.log(Top3)} */}
                <LineChartTop3 Title={Object.keys(TempTop3)} Values={Object.values(TempTop3)}/>
            </div> }
            {toggle === 2 && <div className="md:w-1/2 h-52 w-full px-5 flex mx-auto">
                {AllPledges && <HorizontalBarChartAllPledges Title={Object.keys(AllPledges)} Values={Object.values(AllPledges)}/>}
            </div> }
            {toggle === 3 && <div className="md:w-1/2 h-52 w-full px-5 flex mx-auto">

                {ageGroup && <LineChartAge Title={Object.keys(ageGroup)} Values={Object.values(ageGroup)}/>}
            </div> }
            {toggle === 4 && <div className="md:w-1/2 flex items-center scale-50 md:scale-100 -my-32 md:my-0 md:ml-[31%]">
                <FortuneWheel/>
            </div> }
        </div>
    </div>
}

export default Tabs