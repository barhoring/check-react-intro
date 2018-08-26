// @flow
import React, { Component } from "react";
import preload from '../data.json'
import ShowCard from './ShowCard';

class Search extends Component {

    state = {
        searchTerm: ''
    };

    handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement } ) => {
        this.setState({searchTerm:  event.target.value});
    };

    render() {  
        return (
            <div className="search">
                <header>
                <h1>svideo</h1>
                <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type="text" placeholder="Search" />
                </header>
                <div>
                    {/*
                        // it's a good idea to cache all the words `${show.title} ${show.description}` as toLowerCased.  
                    */}
                { preload.shows.filter(show=> `${show.title} ${show.description}`.toLowerCase().includes(this.state.searchTerm))
                .map( show => (
                    <ShowCard key={show.imdbID} {...show} />
                ))}
                </div>
            </div>
        );
    } 
}


export default Search; 