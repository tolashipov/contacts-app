import React from 'react';
import ReactDOM from 'react-dom';
import ContactBox from './contactBox.js';
import Button from '@material-ui/core/Button';
import './index.css';

class ContactsApp extends React.Component {
    state= {
        children: 9,
    }

    contactList =[]

    // retreives relevent data from contact cards (f. name, l.name, id(cell))
    callBackData = (x) => {
        this.contactList.push(x);
    }

    render() {
        const bulk = [];
        for (var i = 0; i < this.state.children; i += 1) {
            bulk.push(<ContactBox callBackFromPage={this.callBackData} key={i}/>);
        };
        return (
            <div className='page'>
                <div className="navBar">
                    <input type='text' placeholder='Search a contact by name' onKeyDown={this.doSearch}/>
                </div>
                <div className='contactsPage'>
                    {bulk}
                </div>
                <Button variant="contained" className={this.props.button} onClick={this.onAddBulk}>Load More</Button>
            </div>
        );
    }

    doSearch = (e) => {
        if(e.keyCode === 13){
            this.searchName(e);     // seperating into an independant function to allow other methods calling it
        }
    }

    // search function highlighting contact cards
    searchName = (e) => {
        for(let i=0;i<this.contactList.length;i++){
            if(this.contactList[i].first.includes(e.target.value)||this.contactList[i].last.includes(e.target.value)){
                document.getElementById(this.contactList[i].id).classList.add('highlight');
            }else{
                document.getElementById(this.contactList[i].id).classList.remove('highlight');  //disable highlight from previous searches
            }
        }
        // removes the entered text after search is done.
        // for a search option that keeps searching into newly added contacts, this should be removed
        e.target.value = '';       
    }

    //on button press, adds more contact card elements
    onAddBulk = () => {
        this.setState({
          children: this.state.children + 9
        });
    }
}


ReactDOM.render(
    <ContactsApp />,
    document.getElementById('root')
);