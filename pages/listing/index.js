import Link from 'next/link';
import { getListing } from '@services/listing';

export const getServerSideProps = async () => {
  const allListing = await getListing({});
  return {
    props: {
      allListing: allListing,
    },
  };
};

const Listing = ({ allListing }) => {
  return (
    <section>
      <h2>Listing</h2>
      <ul>
        {allListing &&
          allListing.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/listing/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Listing;
