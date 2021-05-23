import React, { useEffect, useState } from 'react';
import Background from '../Background/Background';
import TeamCart from '../TeamCart/TeamCart';
// import backgroundImage from '../../image/background.jpeg'
import './Home.css'
const Home = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [team]);
    const heading = <h1 className="team-tracker">Team Tracker</h1>
    return (
        <div>
            <Background heading={heading}></Background>
            <div className="backgroundColor">
                <div className="team-component">
                    {
                        team.map(team => <TeamCart team={team}></TeamCart>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;