import React from "react";
import "./App.css";
import IndividualUser from "./IndividualUser";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      albums: []
    };
  }
  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    const json = await response.json();
    this.setState({ isLoaded: true, albums: json });
    // fetch("https://jsonplaceholder.typicode.com/albums")
    //   .then(res => res.json())
    //   .then(result => {
    //     this.setState({
    //       isLoaded: true,
    //       albums: result
    //     });
    //   });
  }
  render() {
    let result = this.state.albums.map((album, index) => {
      return (
        <div className="album">
          <div className="album-header">
            <div>{album.title}</div>
            <div className="album-header-body">
              <div className="mrg-right"> id: {album.id} </div>
              <span> userId: {album.userId} </span>
            </div>
            <hr />
          </div>

          <IndividualUser key={index} index={index} album={album} />
        </div>
      );
    });
    return (
      <div className="App">
        <b1>Hello Crazybee..... </b1>
        <br />
        <br />
        {result}
      </div>
    );
  }
}

export default App;
