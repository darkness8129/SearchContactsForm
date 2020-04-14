let CONTACTS = [
            {
                id: 1,
                name: 'Darth Vader',
                phoneNumber: '+250966666666',
                image: 'img/darth.gif',
                email:'darth@gmail.com',
                address:'Ship 3, room 5'
            }, {
                id: 2,
                name: 'Princess Leia',
                phoneNumber: '+250966344466',
                image: 'img/leia.gif',
                email:'leia@gmail.com',
                address:'Ship 5, room 7'
            }, {
                id: 3,
                name: 'Luke Skywalker',
                phoneNumber: '+250976654433',
                image: 'img/luke.gif',
                email:'luke@gmail.com',
                address:'Ship 1, room 2'
            }, {

                id: 4,
                name: 'Chewbacca',
                phoneNumber: '+250456784935',
                image: 'img/chewbacca.gif',
                email:'chewbacca@gmail.com',
                address:'Ship 4, room 1'
            }
        ];

let Contact = React.createClass({
	getInitialState() {
		return {
			isOpen: false
		}
	},

    //func that open and close contact 
	handleOpenContact(event) {
		let {isOpen} = this.state;
		this.setState({isOpen: !isOpen});
	},

    render() {
        let {isOpen} = this.state;
        // if false -  closed contact, true - opened
        return  <li className = "contact" onClick = {this.handleOpenContact}>
                    <img src = {this.props.img} width = "60px" height = "60px" className = "contact-image"/>
                    <div className = "contact-info">
                        <div className = "contact-name">{this.props.name}</div>
                        <div className = "contact-number">{this.props.phoneNumber}</div>
                        {isOpen && (
                        <div className = "aditional-info">
                            <div className = "contact-email">{this.props.email}</div>
                            <div className = "contact-address">{this.props.address}</div>
                        </div>)}
                    </div>
                </li>;
    }
});

let ContactsList = React.createClass({
    getInitialState() {
        return {
            displayedContacts: CONTACTS
        };

    },

    //func for searching contacts
    handleSearch(event){
        let searchQuery = event.target.value.toLowerCase();
        let displayedContacts = CONTACTS.filter((elem) => {
            let searchValue = elem.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({displayedContacts});
    },

    render(){
        return (
            <div className = "contacts">
                <input type = "text" className = "search-field" placeholder="Search..." onChange = {this.handleSearch}/>
                <ul className = "contacts-list">
                    {
                        this.state.displayedContacts.map((elem) => {
                            return <Contact key = {elem.id}
                                name = {elem.name}
                                phoneNumber = {elem.phoneNumber}
                                img = {elem.image}
                                email = {elem.email}
                                address = {elem.address}/>;
                        })
                    }
                </ul>
            </div>
        );
    }
});

ReactDOM.render(<ContactsList/>, document.getElementById('content')); 
