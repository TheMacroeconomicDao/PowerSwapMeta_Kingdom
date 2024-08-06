import ReferenceButton from "./ReferenceButton";
import UserRating from "./etc/UserRating";
import LeaderboardUnit from "./etc/LeaderboardUnit";
import TopLeaderboardUnit from "./etc/TopLeaderboardUnit";

import Shadow from "@/assets/svg/game/tabs/leaderboard/leaderboard-shadow.svg";

import styles from "@/styles/game/currentTab.module.css";
import tabStyles from "@/styles/game/tabs/LeaderboardTab.module.css";

const LeaderboardTab = () => {
  // placeholder data until there's an api to request data from
  const leaders = [
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "4user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "user2130124912841",
      coinsLast24Hours: 156234,
    },
    {
      username: "99user2130124912841",
      coinsLast24Hours: 156234,
    },
  ];

  const places: Array<"first" | "second" | "third"> = [
    "first",
    "second",
    "third",
  ];

  return (
    <div className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className="flex w-full justify-end">
        <ReferenceButton
          direction="fromRight"
          reference="This is the leaderboard. Here's the best of our investors and miners."
        />
      </div>
      <div className={`${styles.section_with_border} flex flex-col`}>
        <div className="mt-1 flex justify-center">
          <UserRating username="user2130124912841" coinsLast24Hours={156234} />
        </div>
        <div className="mx-auto mt-4 flex w-[90%] flex-col gap-3">
          {leaders.slice(0, 3).map((leader, idx) => (
            <TopLeaderboardUnit
              key={`top-leader-${idx}`}
              username={leader.username}
              coinsLast24Hours={leader.coinsLast24Hours}
              place={places[idx]}
            />
          ))}
        </div>
        <div className="mb-16 flex-grow overflow-y-scroll">
          <div
            className={`${tabStyles.leaders_scroll} mx-auto mt-4 flex w-[75%] flex-col gap-3`}
          >
            {leaders.slice(3).map((leader, idx) => (
              <LeaderboardUnit
                key={`leader-${idx}`}
                username={leader.username}
                coinsLast24Hours={leader.coinsLast24Hours}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTab;
