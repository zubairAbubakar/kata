import Container from '../components/Container';
import Heading from '../components/Heading';
import ListingCard from '../components/listings/ListingCard';
import { SafeListing, SafeUser } from '../types';

interface FavoritesDetailsProps {
    listings: SafeListing[];
    currentUser: SafeUser | null;
}

const FavoritesDetails: React.FC<FavoritesDetailsProps> = ({
    listings,
    currentUser,
}) => {
    return (
        <Container>
            <Heading
                title="Your Favorite Listings"
                subtitle="Listings you have favorited"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {listings.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        listing={listing}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    );
};

export default FavoritesDetails;
