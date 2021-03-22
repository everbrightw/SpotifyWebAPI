
import React, { useState, useEffect } from 'react';
import Search from './Search'
import axios from 'axios'

import List from './List'
import Popup from './Popup'
import _ from 'lodash'
import { utils } from '../Utils'

function TabHomeContent(){

    const [state, setState] = useState({
        s: "",
        list: [],
        selected: {}
    }); 
    
    const apiurl = "https://api.spotify.com/v1/browse/new-releases"
    const popupurl = "https://api.spotify.com/v1/albums/"
    

    async function updateNewRelease(){
        let config = await utils.getConfig();
        axios.get(apiurl,config).then(({ data }) => {
            let list = data.albums.items;
            console.log("finished");
            console.log(data.albums.items);
            setState(prevState => {
                return { ... prevState, list: list}
            })
        });
    }

    // call when the page is rendered
    useEffect(() => { updateNewRelease() }, []);
  

        
        // api request
    

    const handleInput = (e) => {
        let s = e.target.value;
        
        setState(prevState => {
            return { ...prevState, s: s}
        });
    
    }
        
    


    // const getNewRelease = (e) => {
    //     axios.get(apiurl,config).then(({ data }) => {
    //         let list = data.albums.items;
    //         console.log("finished");
    //         console.log(data.albums.items);
    //         setState(prevState => {
    //             return { ... prevState, list: list}
    //         })
    //     });
    // }

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


    const ascendArray = (e) => {
        console.log("asecend clicked");
        _.reverse(state.list);
        setState(state=> ({
            ... state
        }))
    }

    const descendArray = (e) => {
        console.log("descend clicked");
        _.reverse(state.list);
        setState(state=> ({
            ... state
        }))
    }
    
    return (
        <div>
            <main>
               
                <div className="descending-btn">
                    <h5 onClick={ascendArray} >Ascending</h5>
                    <h6 onClick={descendArray} >Descending</h6>
                </div>
                <List list={state.list} openPopup={openPopup}/>

                {(typeof state.selected.name != "undefined") ? <Popup selected={state.selected} closePopup = {closePopup} />: false}
            </main>
        </div>

    )
}

export default TabHomeContent;