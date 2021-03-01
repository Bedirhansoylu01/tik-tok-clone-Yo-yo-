import React from 'react';
import './VideoFooter.css';
import disk from './disk.png';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({channel,description,song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@_{channel}_</h3>
                <p>_{description}_</p>
                <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon"/>
                <Ticker mode='smooth'>
                    {({index}) => (
                        <>
                        <p>{song}</p>
                        </>
                    )}
                </Ticker>
                </div>
            </div>
            <img className="videoFooter__record" src={disk} alt=""/>

        </div>
    )
}

export default VideoFooter;


