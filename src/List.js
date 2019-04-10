import React, {Component} from 'react';

class List extends Component{
    constructor(props) {
        super(props);

        this.state = {
            arrived: true
        };

        this.changeState = this.changeState.bind(this);
    }


    changeState() {
        this.setState(
            state => ({
                arrived: !state.arrived
            })
        );
    }

    render(){
        const { guest } = this.props;
        
        return (
            <li className="guest-infobox" key={guest.index}>
                <div className="col-8">
                    <div className="block">
                        <p>Гость <strong>{guest.name}</strong> работает в компании
                        <span className="company"> "{guest.company}"</span><br/>
                        Его контакты:<br/>
                        <strong>{guest.phone};<br/>{guest.address};</strong></p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="block">
                        <button className={this.state.arrived ? 'arrived' : 'notarrived'} onClick={this.changeState}>
                            {this.state.arrived ? 'Прибыл' : 'Ожидаем'}
                        </button>
                    </div>
                </div>
            </li>
        )
    }
}

export default List;