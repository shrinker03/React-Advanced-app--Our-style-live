import React, {Component} from 'react';
import './shop.styles.scss';
import {Route} from 'react-router-dom';
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import {connect} from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';


class ShopPage extends Component {
    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }
    
    render() {
        const {match} = this.props;
     
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }
} 


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);
