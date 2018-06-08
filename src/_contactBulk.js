import React from 'react';
// import FontAwesome from 'react-fontawesome';
// import ReactDOM from 'react-dom';
import ContactBox from './contactBox.js';
import './index.css';

class ContactBulk extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <div className='bulk'>
                <div className='row'>
                    <div className='contact'>
                        <ContactBox searchFromParent={this.props.searchFromParent} sp={this.props.sp} handleSearch={this.props.handleSearch}/>
                    </div>
                    <div className='contact'>
                        <ContactBox searchFromParent={this.props.searchFromParent} sp={this.props.sp} handleSearch={this.props.handleSearch}/>
                    </div>
                    <div className='contact'>
                        <ContactBox searchFromParent={this.props.searchFromParent} sp={this.props.sp} handleSearch={this.props.handleSearch}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='contact'>
                        <ContactBox searchFromParent={this.props.searchFromParent} sp={this.props.sp} handleSearch={this.props.handleSearch}/>
                    </div>
                    <div className='contact'>
                        <ContactBox searchFromParent={this.props.searchFromParent} sp={this.props.sp} handleSearch={this.props.handleSearch}/>
                    </div>
                    <div className='contact'>
                        <ContactBox searchFromParent={this.props.searchFromParent} sp={this.props.sp} handleSearch={this.props.handleSearch}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='contact'>
                        <ContactBox searchFromParent={this.props.searchFromParent} sp={this.props.sp} handleSearch={this.props.handleSearch}/>
                    </div>
                    <div className='contact'>
                        <ContactBox searchFromParent={this.props.searchFromParent} sp={this.props.sp} handleSearch={this.props.handleSearch}/>
                    </div>
                    <div className='contact'>
                        <ContactBox searchFromParent={this.props.searchFromParent} sp={this.props.sp} handleSearch={this.props.handleSearch}/>
                    </div>
                </div>
            </div>
        );
    }
}

  export default ContactBulk;