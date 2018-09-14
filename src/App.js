import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Comics from './Comics';
import { connect } from 'react-redux';
import { addComicToMyList, deleteComicFromMyList} from './actions';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };


        this.handleSelection = this.handleSelection.bind(this);

    }

    render() {

      const comics = Comics().data.results;
      const {selected} = this.props;
      const selectedComics = comics.filter(comic => selected.indexOf(comic.id)!==-1);

        return (
            <div>
                <p>{this.props.selected.length}</p>
                <div className="store-container">
                    <h1>All Comics: {comics.length} Comics available</h1>
                    <List comics={comics}
                          selectedIds={selected}
                          onSelect={this.handleSelection.bind(this, 'allComics')}/>
                </div>
                <div className="owned-container">
                    <h1>My Comics: {selected.length} Comics selected</h1>
                    <List comics={selectedComics}
                          onSelect={this.handleSelection.bind(this, 'myComics')}/>
                </div>
            </div>
        );
    }

    handleSelection(comicList, comicId ) {
        if (comicList === 'allComics' && this.props.selected.indexOf(comicId) === -1) {
            this.props.addComicToMyList(comicId);
        } else {
            this.props.deleteComicFromMyList(comicId);

        }
    };



}

const mapStateToProps = state => {
    return {
        selected: state.selected
    };
};

const mapDispatchToProps = dispatch =>({
    addComicToMyList : (comicId) => dispatch (addComicToMyList(comicId)),
    deleteComicFromMyList: (comicId)=> dispatch (deleteComicFromMyList(comicId))
});

export default connect (mapStateToProps, mapDispatchToProps) (App);
