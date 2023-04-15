import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';

import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import ReservationsDetails from './ReservationsDetails';

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState title="Uauthorized" subtitle="Please login" />
            </ClientOnly>
        );
    }

    const reservations = await getReservations({
        propertyOwnerId: currentUser.id,
    });

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No reservations found"
                    subtitle="Looks like you have no reservations on your property"
                />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <ReservationsDetails
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    );
};

export default ReservationsPage;
