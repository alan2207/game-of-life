import React from 'react';

export default (props) => {
    return (
        <div className="controls">
            <button className="btn primary" onClick={() => props.next()}><i className="fa fa-step-forward" aria-hidden="true"></i> Next</button>
            <button className="btn success" disabled={props.playing} onClick={() => props.play()}><i className="fa fa-play" aria-hidden="true"></i> Play</button>
            <button className="btn warning" disabled={!props.playing} onClick={() => props.pause()}><i className="fa fa-pause" aria-hidden="true"></i> Pause</button>
            <button className="btn default" onClick={() => props.clear()}><i className="fa fa-eraser" aria-hidden="true"></i> Clear</button>
            <button className="btn extra" onClick={() => props.random()}> <i className="fa fa-random" aria-hidden="true"></i> Random</button>
            <span>Generations: {props.generations}</span>
        </div>
    )
}