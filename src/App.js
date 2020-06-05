import React from 'react';
import './App.css';
import Display from './components/Display';
import DrumPadList from './components/DrumPadList';
import BankSwitch from './components/BankSwitch';

class App extends React.Component {
  state = {
    background: "linear-gradient(45deg, #007991, #78ffd6)",
    lastSound: "",
    currentBank: "percussion",
    keys: [
      {
        key: "Q",
        keyCode: 81,
        percussion: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/bateria/baquetas.mp3",
          soundName: "baquetas",
        },
        piano: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/notas-piano/do.mp3",
          soundName: "do",
        },
      },
      {
        key: "W",
        keyCode: 87,
        percussion: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/bateria/plato1.mp3",
          soundName: "cymbal",
        },
        piano: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/notas-piano/re.mp3",
          soundName: "re",
        },
      },
      {
        key: "E",
        keyCode: 69,
        percussion: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/bateria/plato4.mp3",
          soundName: "crash cymbal",
        },
        piano: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/notas-piano/mi.mp3",
          soundName: "mi",
        },
      },
      {
        key: "A",
        keyCode: 65,
        percussion: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/bateria/plato5.mp3",
          soundName: "hi-hit cymbal",
        },
        piano: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/notas-piano/fa.mp3",
          soundName: "fa",
        },
      },
      {
        key: "S",
        keyCode: 83,
        percussion: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/bateria/tambor1.mp3",
          soundName: "snare drum",
        },
        piano: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/notas-piano/sol.mp3",
          soundName: "sol",
        },
      },
      {
        key: "D",
        keyCode: 68,
        percussion: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/bateria/tambor2.mp3",
          soundName: "tom-tom 1",
        },
        piano: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/notas-piano/la.mp3",
          soundName: "la",
        },
      },
      {
        key: "Z",
        keyCode: 90,
        percussion: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/bateria/tambor3.mp3",
          soundName: "tom-tom 2",
        },
        piano: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/notas-piano/si.mp3",
          soundName: "si",
        },
      },
      {
        key: "X",
        keyCode: 88,
        percussion: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/bateria/tambor4.mp3",
          soundName: "drum 4",
        },
        piano: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/notas-piano/do-alto.mp3",
          soundName: "do alto",
        },
      },
      {
        key: "C",
        keyCode: 67,
        percussion: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/bateria/tambor5.mp3",
          soundName: "drum 5",
        },
        piano: {
          src:
            "https://blog-photos-heiss.s3.us-east-2.amazonaws.com/audios/notas-piano/re-alto.mp3",
          soundName: "re alto",
        },
      },
    ],
  };

  saveLastSound = (currentSound) => {
    this.setState({ lastSound: currentSound });
  };

  changeBackground = (newBackground) => {
    this.setState({ background: newBackground });
  };

  bankChanger = () => {
    if (this.state.currentBank === "percussion") {
      this.setState({ currentBank: "piano" });
    } else {
      this.setState({ currentBank: "percussion" });
    }
  };

  render() {
    return (
      <div id="drum-machine" onKeyDown={(e) => this.onKeyDownHandler(e)}>
        <div
          className="AppWrapper"
          style={{ background: this.state.background }}
        >
          <Display currentSound={this.state.lastSound.toUpperCase()} />
          <DrumPadList
            changeBackground={this.changeBackground}
            keys={this.state.keys}
            saveLastSound={this.saveLastSound}
            currentBank={this.state.currentBank}
          />
          <div className="bank-section">
            <BankSwitch
              bankChanger={this.bankChanger}
              currentBank={this.state.currentBank}
            />
            <div className="current-bank">
              {this.state.currentBank.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
