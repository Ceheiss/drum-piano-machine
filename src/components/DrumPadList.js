import React from 'react';
import DrumPad from './DrumPad';
import './DrumPadList.css';

const DrumPadList = (props) => {
  let keyList;
  if (props.currentBank === "percussion") {
    keyList = props.keys.map((e, i) => (
      <DrumPad
        changeBackground={props.changeBackground}
        onKeyDownHandler={(e) => this.onKeyDownHandler(e)}
        key={i}
        keyCode={e.keyCode}
        soundSource={e.percussion.src}
        padId={e.percussion.soundName}
        saveLastSound={() => props.saveLastSound(e.percussion.soundName)}
        selectedKey={e.key}
      />
    ));
  } else {
    keyList = props.keys.map((e, i) => (
      <DrumPad
        changeBackground={props.changeBackground}
        onKeyDownHandler={(e) => this.onKeyDownHandler(e)}
        key={`abc${i}`}
        keyCode={e.keyCode}
        soundSource={e.piano.src}
        padId={e.piano.soundName}
        saveLastSound={() => props.saveLastSound(e.piano.soundName)}
        selectedKey={e.key}
      />
    ));
  }
  return <div className="DrumPadList">{keyList}</div>;
};

export default DrumPadList;