import React from 'react';


export default class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    toggle() {
        this.props.toggleCell(this.props.cell.x, this.props.cell.y)
    }

    render() {
        return (
            <td onClick={this.toggle.bind(this)} className={this.props.cell.alive ? 'alive' : ''}></td>
        )
    }
}