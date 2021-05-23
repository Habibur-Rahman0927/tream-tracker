import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Background from '../Background/Background';
import founded from '../../image/found 1.png';
import flag from '../../image/flag (1) 1.png';
import sports from '../../image/football (1) 1.png';
import gender from '../../image/male-gender-sign 1.png';
import './TeamDetails.css'
import skyp from '../../image/Twitter.png';
import youtube from '../../image/YouTube.png';
import facebook from '../../image/Facebook.png'

const TeamDetails = () => {
    const { idTeam } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [idTeam]);

    const { strTeamBadge, strTeam, intFormedYear, strCountry, strGender, strStadiumThumb } = teamDetails;
    const image = <img className="img" src={strTeamBadge} alt="" />
    return (
        <div className="backgroundColor">

            <Background image={image}></Background>
            {
                console.log(teamDetails)
            }
            <div className="team-body">
                <div className="team-details">
                    <div className="team-detail">
                        <h1 style={{color:"white", margin:'10px'}}>{strTeam}</h1>
                        <div className="team-icon-detail">
                            <img src={founded} alt="" />
                            <p>Founded : {intFormedYear}</p>
                        </div>
                        <div className="team-icon-detail">
                            <img src={flag} alt="" />
                            <p>Country : {strCountry}</p>
                        </div>
                        <div className="team-icon-detail">
                            <img src={sports} alt="" />
                            <p>Sports type : Football</p>
                        </div>
                        <div className="team-icon-detail">
                            <img src={gender} alt="" />
                            <p>Gender : {strGender}</p>
                        </div>
                    </div>
                    <div className="team-img">
                        <img className="imageSize" src={strStadiumThumb} alt="" />
                    </div>
                </div>

                <div className="paragrah-container">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sed in ad perferendis modi, sequi, ab repudiandae vitae eligendi eum placeat quae perspiciatis minus magni eveniet minima earum? Perferendis animi nulla mollitia ab eaque corporis asperiores optio? Voluptatem magnam et distinctio dolorem molestias. Placeat, quidem cum! Ipsam nostrum qui aliquid commodi facilis ea voluptates in eius, minus cupiditate accusantium labore recusandae suscipit? Illo impedit asperiores rerum inventore, culpa unde tenetur quas blanditiis maxime explicabo itaque quos aliquid deserunt nihil adipisci, iste delectus tempora. Molestias facere corporis doloremque, deserunt beatae, id necessitatibus nulla minus, labore aut saepe possimus repudiandae iste quia?</p>

                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sed in ad perferendis modi, sequi, ab repudiandae vitae eligendi eum placeat quae perspiciatis minus magni eveniet minima earum? Perferendis animi nulla mollitia ab eaque corporis asperiores optio? Voluptatem magnam et distinctio dolorem molestias. Placeat, quidem cum! Ipsam nostrum qui aliquid commodi facilis ea voluptates in eius, minus cupiditate accusantium labore recusandae suscipit? Illo impedit asperiores rerum inventore, culpa unde tenetur quas blanditiis maxime explicabo itaque quos aliquid deserunt nihil adipisci, iste delectus tempora. Molestias facere corporis doloremque, deserunt beatae, id necessitatibus nulla minus, labore aut saepe possimus repudiandae iste quia?</p>
                </div>

                <div className="socail-icon">
                    <img src={skyp} alt="" />
                    <img src={youtube} alt="" />
                    <img src={facebook} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;