import { ProfileHeading } from "@/components/profile/heading";
import { TabGroup, Tab, TabList, TabPanels, TabPanel } from "@headlessui/react";
import Image from "next/image";
import Image1 from "@/public/menu_page/pizza/1.png";
import { OrderHistory } from "@/components/order/history";

const TabNames = [
  { id: 1, value: "All Orders" },
  { id: 2, value: "Delivery" },
  { id: 3, value: "Carryout" },
];

export default function Order() {
  return (
    <>
      <ProfileHeading
        heading="Order History"
        subHeading="View your past orders and details"
        showButton={false}
      />

      <div className="w-full mt-3">
        <TabGroup>
          <TabList className="justify-around flex rounded-md outline-[0.5px] outline-secondary/70 ">
            {TabNames.map((obj, index) => (
              <Tab
                key={index}
                className="w-1/3 cursor-pointer border-x border-secondary/70 px-3 py-4 text-sm/4 font-semibold text-black/50 data-selected:border-b-4 data-selected:border-secondary/70 data-selected:bg-secondary/10 data-selected:text-secondary/90 data-selected:data-hover:bg-secondary/20 data-selected:data-hover:text-primary/50 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white"
              >
                {" "}
                {obj.value}
              </Tab>
            ))}
          </TabList>

          <TabPanels className="mt-3">
            <TabPanel>
              <OrderHistory itemNumber={Math.floor(Math.random() * 8) + 1} />
            </TabPanel>
            <TabPanel>
              <OrderHistory
                itemNumber={Math.floor(Math.random() * 8) + 1}
                tabType="delivery"
              />
            </TabPanel>
            <TabPanel>
              <OrderHistory
                itemNumber={Math.floor(Math.random() * 8) + 1}
                tabType="carry out"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
}
