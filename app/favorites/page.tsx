import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';
import getReservations from '../actions/getReservations';

import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import FavoritesDetails from './FavoritesDetails';

const FavoritesPage = async () => {
    const currentUser = await getCurrentUser();
    const listings = await getFavoriteListings();

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No favorities found"
                    subtitle="Looks like you have no favorite listings yet"
                />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <FavoritesDetails listings={listings} currentUser={currentUser} />
        </ClientOnly>
    );
};

export default FavoritesPage;
