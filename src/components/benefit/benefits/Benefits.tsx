import { TbDiscount, TbHomeShield } from "react-icons/tb";
import Number from "../../hero/numbers/Number";
import styles from "./benefits.module.css";
import { CgKeyhole } from "react-icons/cg";
import { CiBadgeDollar, CiLocationOn } from "react-icons/ci";

export default function Benefits() {
  return (
    <div className={styles.benefits}>
      <Number
        Icon={TbHomeShield}
        SubIcon={CgKeyhole}
        title="Property Insurance"
        description="We offer our customer property protection of liability coverage and insurance for their better life."
      />
      <Number
        Icon={CiBadgeDollar}
        SubIcon={TbDiscount}
        title="Best Price"
        description="Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you."
      />
      <Number
        Icon={TbDiscount}
        SubIcon={CiBadgeDollar}
        title="Lowest Commission"
        description="You no longer have to negotiate commissions and haggle with other agents it only cost 2%!"
      />
      <Number
        Icon={CiLocationOn}
        SubIcon={TbHomeShield}
        title="Overall Control"
        description="Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control."
      />
    </div>
  );
}
