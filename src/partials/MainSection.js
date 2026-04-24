import StatisticCard from "@/Components/StatisticCard";
import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import ProfileCard from "@/Components/ProfileCard";
import OwnedBusinessesRevenueChart from "@/Components/OwnedBusinessesRevenueChart";
import RecentRaports from "@/Components/RecentRaports";
import Spinner from "@/Components/ui/Spinner";

const MainSection = ({ profile, business, employee }) => {
  if (!profile) {
    return <Spinner />;
  }
  return (
    <div className="page-content">
      <section className="row">
        <div className="col-12 col-lg-3">
          <ProfileCard profile={profile} />
          <RecentRaports />
        </div>
        <div className="col-12 col-lg-9">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-4">
              <StatisticCard
                title="İşletme Sayısı"
                value={business}
                icon=<FaRegBuilding className="text-white fs-3" />
                variant="purple"
              />
            </div>
            <div className="col-12 col-lg-4 col-md-4">
              <StatisticCard
                title="Çalışan Sayısı"
                value={employee}
                icon=<MdOutlinePeopleAlt className="text-white fs-3" />
                variant="blue"
              />
            </div>
            <div className="col-12 col-lg-4 col-md-4">
              <StatisticCard
                title="Toplam Kazanç"
                value="170.250 ₺"
                icon=<FaRegMoneyBill1 className="text-white fs-3" />
                variant="green"
              />
            </div>
            <OwnedBusinessesRevenueChart />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
