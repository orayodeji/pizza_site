import { SavedProductTiles } from "@/components/profile/saved-product-tiles";
import { ProfileHeading } from "@/components/profile/heading";

export default function SavedItems() {
  return (
    <>
      <ProfileHeading
        heading="Saved Items"
        subHeading="Your favourite products, ready when you are"
        showButton={false}
      />
      <SavedProductTiles />
    </>
  );
}
