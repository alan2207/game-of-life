import React from 'react';
import{connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {randomGrid, nextGrid, clearGrid, toggleCell} from '../actions';


import Cell from '../components/Cell';
import Controls from '../components/Controls';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            interval: null,
            playing: false,
            generations: 0,
            height: 30,
            width: 50
        }
    }

    componentDidMount() {
        this.props.actions.randomGrid(this.state.height, this.state.width);
    }


    play() {
        this.setState({playing: true, interval: setInterval(() =>  {
            this.nextState();
        }, 200)})
    }

    pause() {
        clearInterval(this.state.interval);
        this.setState({interval: null, playing: false})
    }

    clear() {
        this.setState({generations: 0});
        this.props.actions.clearGrid(this.state.height, this.state.width);
        this.pause();
    }

    random() {
        this.setState({generations: 0});
        this.props.actions.randomGrid(this.state.height, this.state.width);
    }
   

    nextState() {
        this.props.actions.nextGrid(this.state.height, this.state.width, this.props.grid);
        this.setState({generations: this.state.generations + 1});
    }

    renderGrid() {
        return this.props.grid.map((row, y) => {
            return (
                <tr key={y}>
                    {row.map((cell, x) => {
                        return <Cell key={x} toggleCell={this.props.actions.toggleCell} cell={this.props.grid[y][x]} />
                    })}
                </tr>
            )
        })
    }


    render() {
        return (
            <div id="board">
                <table>
                    <tbody>
                    {this.renderGrid()}
                    </tbody>
                </table>

                <Controls 
                    next={this.nextState.bind(this)}
                    play={this.play.bind(this)}
                    pause={this.pause.bind(this)}
                    clear={this.clear.bind(this)}
                    random={this.random.bind(this)}
                    playing={this.state.playing}
                    generations={this.state.generations}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        grid: state.grid
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            randomGrid: bindActionCreators(randomGrid, dispatch),
            nextGrid: bindActionCreators(nextGrid, dispatch),
            clearGrid: bindActionCreators(clearGrid, dispatch),
            toggleCell: bindActionCreators(toggleCell, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);