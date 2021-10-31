/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Slider } from 'antd';
import playButton from '../play-button.svg'

const Player = ({ value, max, current, duration, isPlay = false, isLoading, onPlay, onChangeRange, songData, onChangeVolume, state }) => {
  return (
    <div>
      <div className="bg-gray-800 rounded-tl-xl sm:rounded-t-xl p-2 pb-6 sm:p-8 lg:p-4 lg:pb-6 xl:p-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
        <div className="d-flex align-items-center">
          <div className="mr-2 flex items-center space-x-3.5">
            <img loading="lazy" src={songData?.img} alt="" width="160" height="160" className="flex-none w-20 h-20 rounded-lg bg-gray-100" />

          </div>
          <div className="space-y-2 flex-grow-1">
            <div className="min-w-0 flex-auto">
              <h2 className="text-white text-base font-semibold  mr-2">
                {songData?.song}
              </h2>
              <p className="text-gray-500 text-gray-400 text-base font-medium">
                {
                  songData?.singer.map((item, index) => {
                    return (
                      <span key={item.id}>{
                        index !== songData.singer.length - 1 ? `${item.singer}, ` : item.singer
                      }</span>
                    )
                  })
                }
              </p>
            </div>
            <div className="bg-black rounded-full overflow-hidden">
              <Slider tipFormatter={null} style={{ height: 2, marginInline: 10 }} onMouseUp={() => console.log(1)} onChange={(e) => onChangeRange(e)} type="range" min={0} value={value} max={max} />
            </div>
            <div className=" text-gray-400 flex justify-between text-sm font-medium tabular-nums">
              <div>{current}</div>
              <div>{duration}</div>
            </div>
          </div>
          <i style={{ fontSize: 20, color: 'white', marginTop: 30 }} className={`fas volumeIcon ${state.volume ? `fa-volume-up` : `fa-volume-down`} ml-3`}></i>
          <span className="volumeRange" style={{ position: 'relative', display: 'none' }}>
            <Slider vertical style={{ zIndex: 9999, height: 50, marginInline: 5, position: 'absolute', bottom: -10, left: -22 }} type="range" onChange={(e) => onChangeVolume(e)} min={0} value={state.volume} max={10} />
            <div style={{ width: 25, height: 25, backgroundColor: '', position: 'absolute', bottom: 11, left: -25 }}></div>
          </span>
        </div>
      </div>
      <div className="bg-gray-900 text-white lg:rounded-b-xl py-2 px-1 sm:px-3 lg:px-1 xl:px-3 grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 items-center">
        <button type="button" className="mx-auto">
          <svg width="24" height="24" fill="none">
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <button type="button" className="mx-auto">
          <svg width="17" height="18">
            <path d="M0 0h2v18H0V0zM4 9l13-9v18L4 9z" fill="currentColor" />
          </svg>
        </button>
        {/* <button type="button" className="mx-auto">
          <svg width="34" height="39" fill="none">
            <path d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z" fill="currentColor" />
            <path d="M1 22c0 8.837 7.163 16 16 16s16-7.163 16-16S25.837 6 17 6" stroke="currentColor" stroke-width="1.5" />
            <path d="M17 0L9 6l8 6V0z" fill="currentColor" />
          </svg>
        </button> */}
        <button style={{ width: 50, height: 50 }} onClick={() => onPlay()} type="button" className="mx-auto">
          {!isLoading ? isPlay ? <svg width="50" height="50" fill="none">
            <circle className="text-gray-500" cx="25" cy="25" r="24" stroke="currentColor" strokeWidth="1.5" />
            <path d="M18 16h4v18h-4V16zM28 16h4v18h-4z" fill="currentColor" />
          </svg> :
            <img loading="lazy" style={{ width: 50, height: 50 }} src={playButton} alt="..." /> :
            <i  className="fa fa-spinner fa-pulse text-white"></i>
          }
        </button>
        {/* <button type="button" className="mx-auto">
          <svg width="34" height="39" fill="none">
            <path d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z" fill="currentColor" />
            <path d="M33 22c0 8.837-7.163 16-16 16S1 30.837 1 22 8.163 6 17 6" stroke="currentColor" stroke-width="1.5" />
            <path d="M17 0l8 6-8 6V0z" fill="currentColor" />
          </svg>
        </button> */}
        <button type="button" className="mx-auto">
          {/* <button type="button" className="hidden sm:block lg:hidden xl:block mx-auto"> */}
          <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
            <path d="M17 0H15V18H17V0Z" fill="currentColor" />
            <path d="M13 9L0 0V18L13 9Z" fill="currentColor" />
          </svg>
        </button>
        <button type="button" className="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-500 border-gray-600 text-gray-400">
          1.0x
        </button>
      </div>
    </div>
  );
};

Player.propTypes = {

};

export default Player;