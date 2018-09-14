import React, { Component } from 'react';
import ListItem from './ListItem';
//import './List.css';

class List extends Component {

  render() {
    return (
        <div>
            {this.props.comics.map(comic => <ListItem comic={comic}
                                                        key={comic.id}
                                                        isSelected={this.props.selectedIds && this.props.selectedIds.indexOf(comic.id)!== -1}
                                                        onSelect={this.props.onSelect} />)}

        </div>


    );
  }

}

export default List;