import React, { Component, PropTypes } from 'react';
import { video } from './cloudinary';

export default class CloudinaryVideo extends Component {
  render() {
    const { publicId, options } = this.props;
    return (
      <div dangerouslySetInnerHTML={{__html: video(publicId, options)}}></div>
    );
  }
}

CloudinaryVideo.propTypes = {
  publicId: PropTypes.string.isRequired,
  options: PropTypes.object,
};