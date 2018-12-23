import React, { Component } from 'react';
import { connect } from 'react-redux';
import Img from '../../components/ImageGrid/Img/Img';
import NoImg from '../../components/ImageGrid/NoImg/NoImg';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NavigationArrows from '../Button/NavigationArrows/NavigationArrows';

class ImageGrid extends Component {

    render () {
        let images = <Spinner />;
        let navigationItems = null;

  

        if (!this.props.loading && this.props.error == null ) { 
                if(this.props.data.length > 0) {
                    images = this.props.data.map(img => 
                        <Img key={img.id} 
                            url={img.urls.small} 
                            user={img.user.links.html} 
                            name={img.user.name}
                            link={img.links.html}
                    />);
                } else {
                    images = <NoImg/>;
                }
        } else if (!this.props.loading) {
            images = <ErrorMessage/>;
            } else {
                images = <Spinner />;
            }              

        return (
            <ul className="webapp-bottom-imageGrid">
                {images}
                {navigationItems}                 
            </ul>
        );
    }   
    
};

const mapStateToProps = state => {
    return {
        data: state.data,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps)(ImageGrid);