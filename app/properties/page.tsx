import getCurrentUser from '../actions/getCurrentUser';
import getListings from '../actions/getListings';

import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import PropertiesDetails from './PropertiesDetails';

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState title="Uauthorized" subtitle="Please login" />
            </ClientOnly>
        );
    }

    const listings = await getListings({ userId: currentUser.id });

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No Properties found"
                    subtitle="Looks like you have properties."
                />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <PropertiesDetails listings={listings} currentUser={currentUser} />
        </ClientOnly>
    );
};

export default PropertiesPage;
