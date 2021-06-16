import React, {useEffect, lazy, Suspense} from 'react';
import './shop.styles.scss';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

const  CollectionOverviewContainer = lazy(() => import('../../components/collections-overview/collection-overview.container'));
const  CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({fetchCollectionsStart, match}) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])
     
    return (
        <Suspense fallback={<Spinner />}>
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        </Suspense>
    )
}



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
