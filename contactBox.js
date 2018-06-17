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
    this.card = {
      id: '',
      first: '',
      last: ''
      }
      this.cards = [];
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=9")
      .then(results => {
          // console.log('json', results.json());     // just to spy on the API
          return results.json();
      }).then(data => {
        console.log(data);
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
          // using the cell # as id, since it's most likely a unique #
          console.log('before CB', data.results);
          this.props.callBackFromPage(data.results);
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