
import React, { useState } from 'react';
import Search from './Search'
import axios from 'axios'

import Results from './Results'
import Popup from './Popup'
import qs from 'querystring'
import { utils } from '../Utils'

function TabSearchContent(){

    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    }); 

    const apiurl = "https://api.spotify.com/v1/search?"
    const popupurl = "https://api.spotify.com/v1/albums/"

    const search = async (e) => {
        
        if (e.key == "Enter"){// user pressed enter, return the result
            // api request
            let config = await utils.getConfig();
            axios.get(apiurl + "q=" + state.s + "&type=album",config).then(({ data }) => {
                let results = data.albums.items;
                console.log("finished");
                console.log(data.albums.items);
                setState(prevState => {
                    return { ... prevState, results: results}
                })
            });
        }
    }

    

    const handleInput = (e) => {
        let s = e.target.value;
        
        setState(prevState => {
            return { ...prevState, s: s}
        });
    
    }

    // shows detail page 
    const openPopup = async id => {

        let config = await utils.getConfig();
        
        axios(popupurl + id, config).then(({ data }) => {
            let result = data;

            setState(prevState => {
            return { ... prevState, selected: result}
            });
        });
    }
    
    const closePopup = () => {
        setState(prevState => {
            return { ...prevState, selected: {}}
        });
    }

    return (
        <div>
            <main>
                <Search handleInput={handleInput} search={search}/>
                <h4>Newest</h4>
                <h5>Oldest</h5>
                <h6></h6>
                <Results results={state.results} openPopup={openPopup}/>

                {(typeof state.selected.name != "undefined") ? <Popup selected={state.selected} closePopup = {closePopup} />: false}
            </main>
        </div>

    )
}



export default TabSearchContent;