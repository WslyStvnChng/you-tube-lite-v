import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import YouTubeSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
const apiKey = "AIzaSyC57didw6le8RQiDEFS2mW5VdnFbLwnXn4";

class App extends Component {
  state = {
    videos: [],
    //set to initial value
    selectedVideo: null
  }

  //searchTerm is placeholder has nothing to do with other searchTerm
  runSearch(searchTerm) {
    // calling apiKey and the term
    YouTubeSearch({ key: apiKey, term: searchTerm }, videos => {
      console.log("Logging out the variable videos :", videos);
      this.setState({
        videos: videos,
        //the first video by the index
        selectedVideo: videos[0]
      })
    });
  }

  componentDidMount() {
    //Look at parent component 
    this.runSearch("kelp");
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md="12">
            {/* Grabbing the correct state, need to bind the search to "this" */}
              <SearchBar runSearch={this.runSearch.bind(this)}/>
            </Col>
          </Row>

          <Row>
            <Col md="8">
            {/* Child component is VideoDetail */}
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </Col>
            <Col md="4">Video List</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
