import PieChart from './PieChart';
import UserContext from '../context/UserContext'
import {useContext} from 'react'
import { useYourDrunk } from '../hooks/customhook';

const TrackerDisplay = ({glasses}) => {

    const value = useContext(UserContext)

    const drunk = useYourDrunk()

    return (
        <>
            <p>{value.name}'s daily goal: {value.goal}</p>
            <p>Glasses drunk: {glasses}</p>
            <PieChart glasses={glasses} goal={value.goal} />
            { glasses >= value.goal ? "Goal reached! 🥳" : null }
            { glasses >= value.goal ? drunk : null }

            <br></br>
        </>
    )
}

export default TrackerDisplay;
