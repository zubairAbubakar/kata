import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingsById from '@/app/actions/getListingsById';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import ListingDetails from './ListingDetails';

interface IParams {
    listingId: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
    const listing = await getListingsById(params);
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
            <ListingDetails listing={listing} currentUser={currentUser} />
        </ClientOnly>
    );
};

export default ListingPage;
