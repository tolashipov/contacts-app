import React from 'react';
import FontAwesome from 'react-fontawesome';
import './index.css';

class ContactBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      contacts: [],
    };
    this.contact = {
      id: '',
      first: '',
      last: ''
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(results => {
          // console.log('json', results.json());     // just to spy on the API
          return results.json();
      }).then(data => {
          let contacts = data.results.map((contact) => {
              const gender = (contact.gender==='male') ? 'mars' : 'venus';
              return(
                <div className='contactDiv' key={contact.cell} id={contact.cell}>
                  <div className='imgDiv'>
                    <img alt='no img sry' src={contact.picture.medium}/>
                  </div>
                  <div className='detailDiv'>
                    <p className='nameP'>{contact.name.first} {contact.name.last}</p>
                    <FontAwesome name={gender} size='2x'/>
                    <p className='mailP'>{contact.email}</p>
                  </div>
                </div>
              )
          })
          this.setState({contacts: contacts, isLoaded: true});
          this.contact.id = data.results[0].cell;           // using the cell # as id, since it's most likely a unique #
          this.contact.first = data.results[0].name.first;
          this.contact.last = data.results[0].name.last;
          this.props.callBackFromPage(this.contact);
        },

        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  
  render() {
    const { error, isLoaded, contacts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else  {
      return (
        <div>
          {contacts}
        </div>
      );
    }
  }
}

  export default ContactBox;



//  // function that collects all the first and last names in the page for search purposes
//  collectNames(first, last){
//   this.names.first = first;
//   this.names.last = last;
// }
// // search function - uses the Regex search, received from grandparent
// // matches with first and last names, received when function is called
// // output TRUE if the Regex fits part of first or last name
// // output FALSE if the Regex doesn't fit part of first or last name
// // contactDiv then adds a 'highlight' className if the term fits
// doesFitSearchInput(first, last){
//   console.log('want to search', this.props.searchFromParent);
//   if(this.props.sp){
//     this.props.handleSearch;
//     console.log('searching', this.props.searchFromParent);
//     if (this.props.searchFromParent ===first||this.props.searchFromParent ===last){
//       return true;
//     }else{
//       return false;
//     }
//   }
// }+ (this.doesFitSearchInput(contact.name.first, contact.name.last) ? 'highlight' : '')}