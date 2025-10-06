import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricing from "../DaisyPricing/DaisyPricing";

const PricingOptions = ({ pricingPromise }) => {
  const PricingData = use(pricingPromise);

  return (
    <div>
      <h2 className="text-5xl">Get Our Membership </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {/* {PricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))} */}



        {
            PricingData.map(pricing => <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
        }
      </div>
    </div>
  );
};

export default PricingOptions;
