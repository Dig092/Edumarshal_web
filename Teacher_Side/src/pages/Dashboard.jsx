import React from 'react'
import sideMenu from "../constants/SideMenu.json"
import SideBarTeacher from '../components/SideBarTeacher'
import NavBarTeacher from '../components/NavBarTeacher'

const Dashboard = () => {
    return (
        <div className='flex'>
            <SideBarTeacher />
            <NavBarTeacher title={"Dashboard"} />
            <div className='absolute top-0'>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="./icons/totalStudents.png" alt="" />
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Dashboard