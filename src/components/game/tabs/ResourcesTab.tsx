import BuyResource from "./etc/resources/BuyResource";
import UpdatePoolProgress from "./etc/resources/UpdatePoolProgress";
import ReferenceButton from "./etc/ReferenceButton";

import styles from "@/styles/game/currentTab.module.css";
import Resources from "./etc/resources/Resources";

const ResourcesTab = () => {
  return (
    <div className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className="flex w-full justify-end">
        <ReferenceButton
          direction="fromRight"
          reference="This is the resource pool. It says how much resources are there for people to obtain."
        />
      </div>
      <div className={`${styles.section_with_border} relative`}>
        <div className="flex flex-col gap-[12px]">
          <div></div>
        </div>
        <Resources />
        <div className="flex flex-col items-end gap-2">
          <UpdatePoolProgress startTime={7200} remainingTime={5864} />
          <BuyResource />
        </div>
      </div>
    </div>
  );
};

export default ResourcesTab;
