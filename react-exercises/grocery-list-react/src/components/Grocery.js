import React, { Component } from 'react';
class Grocery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputItem: '',
            tempArray: [],
            listInfo: { itemName: '', purchased: false, count: 0 }
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {

        if (this.state.list.length > 0) {
            let result = this.state.list.filter(data => data.itemName === this.state.inputItem)
            if (result.length > 0) {
                this.state.listInfo.count = (this.state.listInfo.count + 1)
                this.setState(this.state.listInfo.count + 1)
            }
            else {
                this.state.listInfo.itemName = this.state.inputItem
                this.state.tempArray.push(this.state.listInfo);
                this.setState({ list: this.state.tempArray })
            }
        }
        else {

            this.state.listInfo.itemName = this.state.inputItem
            this.state.tempArray.push(this.state.listInfo);
            // this.setState({ list: this.state.tempArray })

        }
    }
    handleChange(event) {
        console.log(event.target.value);
        this.setState({ inputItem: event.target.value })
    }
    render() {

        const { list, inputItem } = this.state;
        const styles = {
            fontStyle: {
                color: 'yellow',
                marginTop: '10px',
                fontSize: '50px',
                fontWeight: 'bold'
            },
            inputBox: {
                padding: '15px',
                marginTop: '20px',
                width: '300px',
                textAlign: 'center',
                fontSize: '20px'
            },
            buttonStyle: {

            }
        }
        return (
            <div style={{ height: '760px' }}>
                <div style={styles.fontStyle}>Grocery List</div>
                <input style={styles.inputBox} type="text" placeholder="Add items here ... " name="item" value={inputItem} onChange={this.handleChange}></input>
                <button style={styles.buttonStyle} onClick={this.handleClick}>+Add</button>

                <ol >
                    {list.map((data, index) => (

                        <li style={{ color: "white" }} key={index}>{data.itemName}</li>

                    ))}
                </ol>
            </div >
        )
    }
}

export default Grocery;