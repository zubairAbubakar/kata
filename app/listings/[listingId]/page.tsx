import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingsById from '@/app/actions/getListingsById';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import ListingDetails from './ListingDetails';
import getReservations from '@/app/actions/getReservations';

interface IParams {
    listingId: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
    const listing = await getListingsById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <ListingDetails
                listing={listing}
                currentUser={currentUser}
                reservations={reservations}
            />
        </ClientOnly>
    );
};

export default ListingPage;
