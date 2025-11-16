import styles from "./properties_listings.module.css";
import Headline from "./headline/Headline";
import Searchbar from "./tab_search_bar/Searchbar";
import Tabs from "./tab_search_bar/Tabs";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { PiResizeFill } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import BrowseMoreProperties from "./BrowseMoreProperties";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function PropertiesListings() {
  const [search, setSearch] = useState("");
  const [properties, setProperties] = useState([
    {
      image: "src/assets/house_1.jpg",
      price: "$2,095",
      location: "Palm Harbor",
      address: "2699 Green Valley, Highland Lake, FL",
      beds: 4,
      bathrooms: 2,
      size: "5x7 m²",
      liked: false,
    },
    {
      image: "src/assets/house_2.jpg",
      price: "$2,700",
      location: "Beverly Springfield",
      address: "2821 Lake Sevilla, Palm Harbor, TX",
      beds: 4,
      bathrooms: 2,
      size: "5x7 m²",
      liked: false,
    },
    {
      image: "src/assets/house_3.jpg",
      price: "$4,550",
      location: "Faulkner Ave",
      address: "909 Woodland St, Michigan, IN",
      beds: 4,
      bathrooms: 2,
      size: "5x7 m²",
      liked: false,
    },
    {
      image: "src/assets/house_4.jpg",
      price: "$2,400",
      location: "St. Crystal",
      address: "210 US Highway, Highland Lake, FL",
      beds: 4,
      bathrooms: 2,
      size: "5x7 m²",
      liked: false,
    },
    {
      image: "src/assets/house_5.jpg",
      price: "$1,500",
      location: "Cove Red",
      address: "243 Curlew Road, Palm Harbor, TX",
      beds: 4,
      bathrooms: 2,
      size: "5x7 m²",
      liked: false,
    },
    {
      image: "src/assets/house_6.jpg",
      price: "$1,600",
      location: "Lakeview Drive",
      address: "909 Woodland St, Michigan, IN",
      beds: 4,
      bathrooms: 2,
      size: "5x7 m²",
      liked: false,
    },
  ]);

  const handleLiked = (propertyToToggle: (typeof properties)[0]) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property === propertyToToggle
          ? { ...property, liked: !property.liked }
          : property
      )
    );
  };

  const filteredProperties = !search
    ? properties
    : properties.filter(
        (property) =>
          property.address.includes(search) ||
          property.location.includes(search)
      );

  return (
    <div className={styles.properties_listings}>
      <Headline />
      <div className={styles.tabs_and_search}>
        <Tabs />
        <Searchbar setSearch={setSearch} />
      </div>
      <div className={styles.listings_results}>
        {filteredProperties.map((property, index) => (
          <div key={index}>
            <img src={property.image} alt={`House ${index + 1}`} />
            <div className={styles.details}>
              <div className={styles.details_price}>
                <h3>{property.price}</h3>
                <span>/month</span>
              </div>
              <div className={styles.like}>
                {property.liked ? (
                  <FaHeart
                    size={26}
                    color="#7065F0"
                    onClick={() => handleLiked(property)}
                  />
                ) : (
                  <CiHeart
                    size={26}
                    color="#7065F0"
                    onClick={() => handleLiked(property)}
                  />
                )}
              </div>
              <div className={styles.details_location}>
                <h3>{property.location}</h3>
                <span>{property.address}</span>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.accommodations}>
                <div className={styles.accommodation}>
                  <IoBedOutline size={24} color="#7065F0" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className={styles.accommodation}>
                  <BiBath size={24} color="#7065F0" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className={styles.accommodation}>
                  <PiResizeFill size={24} color="#7065F0" />
                  <span>{property.size}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BrowseMoreProperties />
    </div>
  );
}
