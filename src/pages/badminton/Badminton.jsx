import React from 'react';
import './Badminton.css';
import bmt1 from '../../Resources/Hylo-badminton.jpg';
import bmt2 from '../../Resources/2023-Korea-Masters.png';
import bmt3 from '../../Resources/Kumamoto-Masters.png';
import bmt4 from '../../Resources/Syed_Modi.png';
import bmt5 from '../../Resources/2023-BWF.png';

function Badminton() {
return (
    <div>
        <header className="badminton-header">
        <h2>Upcoming Tournaments</h2>
        </header>
    <div class="section">
        <img src={bmt1} alt="Image 1" width="150px" height="150px" />
        <div>
            <h2>Hylo Open 2023</h2>
            <p>31 October - 05 November</p>
            <p>Prize Money USD $210,000</p>
        </div>
    </div>

    <div class="section">
        <img src={bmt2} alt="" width="150px" height="150px" />
        <div>
            <h2>Korea Masters 2023</h2>
            <p>07 - 12 November</p>
            <p>Prize Money USD $210,000</p>
        </div>
    </div>

    <div class="section">
        <img src={bmt3} alt="" width="150px" height="150px" />
        <div>
            <h2>Kumamoto Masters Japan 2023</h2>
            <p>14 - 19 November</p>
            <p>Prize Money USD $420,000</p>
        </div>
    </div>
    <div class="section">
        <img src={bmt4} alt="" width="150px" height="150px" />
        <div>
            <h2>Syed Modi India 2023</h2>
            <p>28 November - 03 December</p>
            <p>Prize Money USD $210,000</p>
        </div>
    </div>
    <div class="section">
        <img src={bmt5} alt="" width="150px" height="150px" />
        <div>
            <h2>HSBC BWF world Tour Finals 2023</h2>
            <p>13 - 17 December</p>
            <p>Prize Money USD $2,000,000</p>
        </div>
    </div>
    </div>
);

}

export default Badminton;