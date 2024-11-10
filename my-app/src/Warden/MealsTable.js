import './App.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

function MealsTable() {
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const [morning, setMorning] = useState([
        "Masala Dosa",
        "Idli with Vada",
        "Upma With Halwa",
        "Chole Bature",
        "Paniyaram",
        "Aloo Paratha",
        "Poha"
    ]);

    const [afternoon, setAfternoon] = useState([
        "Paneer Sandwich",
        "Methi Thepla",
        "Veg Biryani",
        "Vangi Bath",
        "Aloo Matar",
        "Cauliflower curry",
        "Chicken Curry"
    ]);

    const [night, setNight] = useState([
        "Lemon Rice",
        "Pulav",
        "Tomato Rice",
        "Dal Fry",
        "Rice and Rasam",
        "Aloo Gobi",
        "Chicken Biryani"
    ]);

    const [selectedMorning, setSelectedmorning] = useState('');
    const [selectedAfternoon, setSelectedAfternoon] = useState('');
    const [selectedNight, setSelectedNight] = useState('');


    return (
        <div style={{ marginLeft: '10%', width: '80%', marginTop: '5%' }}>
            <div className="table-menu">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th><u>Day</u></th>
                            <th><u>Morning</u></th>
                            <th><u>Afternoon</u></th>
                            <th><u>Night</u></th>
                        </tr>
                    </thead>
                    <tbody>
                        {week.map((day, index) => (
                            <tr key={index}>
                                <td><b>{day}</b></td>
                                <td>{morning[index]}</td>
                                <td>{afternoon[index]}</td>
                                <td>{night[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
}

export default MealsTable;