import React from 'react'
import sideMenu from "../constants/SideMenu.json"
import SideBarTeacher from '../components/SideBarTeacher'
import NavBarTeacher from '../components/NavBarTeacher'
import DashboardCard from '../components/DashboardCard'
import SubCardsCircular from '../components/SubCardsCircular'

const Dashboard = () => {
    return (
        <div className='flex w-full min-h-[100vh]'>
            <SideBarTeacher />
            <NavBarTeacher title={"Dashboard"} />
            <div className='absolute top-20 left-20 w-[90%]'>
                <div className='flex justify-evenly '>
                    <div>
                        <div className='flex justify-evenly'>
                            <DashboardCard title="Total Students" src="./icons/totalStudents.png" data="120" />
                            <DashboardCard title="Total Students" src="./icons/totalStudents.png" data="120" />
                            <DashboardCard title="Total Students" src="./icons/totalStudents.png" data="120" />
                        </div>
                        <div></div>
                    </div>
                    <div className='text-black bg-white w-[30%] rounded-lg'>
                        <h1 className='m-5 ml-8 text-lg font-semibold'>Teacher-Circular</h1>
                        <SubCardsCircular date="21 February" title="Event" />
                        <SubCardsCircular date="21 February" title="Event" />
                        <SubCardsCircular date="21 February" title="Event" />
                        <SubCardsCircular date="21 February" title="Event" />
                    </div>
                </div>
                <img src="./icons/teacherTimetable.png" alt="" />
            </div>
        </div>
    )
}

export default Dashboard