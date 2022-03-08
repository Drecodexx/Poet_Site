import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ReactReadMoreReadLess from "react-read-more-read-less";
axios.defaults.withCredentials = true;

const apiURL = "http://127.0.0.1:8000/api/poems/";

function Poems() {
    const [Poems, setPoems] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    
const fetchData = async () => {
    const response = await axios.get(apiURL);
    console.log(response)
    setPoems(response.data);
    console.log(Poems);
    console.log(response.data);
}


    
    
    return (
        <div className="poemsection container-fluid ">
            <h1 className={'Tpcard center' }>Some of my work</h1>
            <div className="gridPoems row container">
                    {Poems.map((Poempost, index) => (
                        <div className="col-sm-4 col-md-3 Mediacard item" style={{ width: '18rem' }}>
                        <img alt="an img" src="/images/img2.png" />
                        <div style={{ padding: '10px' }}>
                            <h5>{Poempost.title}</h5>
                            <p>
                                  
                                   <ReactReadMoreReadLess
                                        charLimit={60}
                                        readMoreText={"Read more ▼"}
                                        readLessText={"Read less ▲"}
                                        readMoreClassName="read-more-less--more"
                                        readLessClassName="read-more-less--less"
                                    >
                                        {Poempost.content}
                                    </ReactReadMoreReadLess>
                            </p>
                            <p> category: {Poempost.category}</p>
                            <a to='#' variant="primary">Go somewhere</a>
                        </div>
                    </div>
                   
                ))}
            </div>
        </div>
    );
}
export default Poems;