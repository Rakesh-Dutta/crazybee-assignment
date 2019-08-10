import React from "react";
import "./App.css";
export default class IndividualUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      album: []
    };
  }
  componentWillMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${
        this.props.album.id
      }`
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          album: result
        });
      });
  }
  render() {
    console.log(`IndividualUser${this.props.album.id}`);
    let individualResult = this.state.album.map((element, index) => {
      return (
        <div className="album-element">
          <div>
            <img src={element.thumbnailUrl} alt="new" />
            <div className="element-title">{element.title}</div>
            <div className="element-id">id: {element.id}</div>
          </div>
        </div>
      );
    });
    return <div className="alb-ind">{individualResult}</div>;
  }
}
