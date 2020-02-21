import React, { Component } from 'react';
import Slideshow from 'react-native-image-slider-show';
export default class ImageSlider extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        position: 1,
        interval: null,
        dataSource: [
          {
            // title: 'Title 1',
            // caption: 'Caption 1',
            url: 'https://www.thomsonmedical.com/wp-content/uploads/2019/08/745032d963c2f363e93a9cf500947711.jpg',
          }, {
            // title: 'Title 2',
            // caption: 'Caption 2',
            url: 'http://ratopati.prixa.net/media/albums/january-national-blood-donor-month_XcLCfC2IVF.jpg',
          }, {
            // title: 'Title 3',
            // caption: 'Caption 3',
            url: 'https://www.rd.com/wp-content/uploads/2019/01/13-Things-You-Should-Know-Before-Donating-Blood-4.jpg',
          },
        ],
      };
    }
   
    componentWillMount() {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }, 2000)
      });
    }
   
    componentWillUnmount() {
      clearInterval(this.state.interval);
    }
   
    render() {
      return (
      <Slideshow 
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />
      );
    }
  }