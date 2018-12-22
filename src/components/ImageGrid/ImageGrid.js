import React, { Component } from 'react';
import { connect } from 'react-redux';
import Img from '../../components/ImageGrid/Img/Img';
import NoImg from '../../components/ImageGrid/NoImg/NoImg';
import Spinner from '../../components/Spinner/Spinner';

class ImageGrid extends Component {

    render () {
        let images = <Spinner />;

        if (!this.props.loading) { 
            if(this.props.data.length > 0) {
                images = this.props.data.map(img => 
                    <Img key={img.id} 
                        url={img.urls.small} 
                        user={img.user.links.html} 
                        name={img.user.name}
                        link={img.links.html}
                />);
            } else {
                images = <NoImg/>
            }                
        }

        return (
            <ul className="webapp-bottom-imageGrid">
                {images}                 
            </ul>
        );
    }
   
    
};

const mapStateToProps = state => {
    return {
        data: state.data,
        loading: state.loading
    };
};

export default connect(mapStateToProps)(ImageGrid);