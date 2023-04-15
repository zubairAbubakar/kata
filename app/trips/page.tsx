import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import TripsDetails from './TripsDetails';

const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState title="Uauthorized" subtitle="Please login" />
            </ClientOnly>
        );
    }

    const reservations = await getReservations({ userId: currentUser.id });

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState title="No trips" />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <TripsDetails
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    );
};

export default TripsPage;
