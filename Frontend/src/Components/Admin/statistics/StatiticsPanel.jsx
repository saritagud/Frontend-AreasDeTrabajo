import { useEffect } from "react";
import StatisticsCard from "./StatisticsCard";

import {
  getStatisticsRequest,
  getStatisticSuccess,
  getStatisticsFailure,
  selectStatistics,
  selectIsLoadingStatistics,
} from "../../../features/statistics/statisticsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../../features/auth/authSlice";
import CenteredSpinner from "../../CenteredSpinner";
import HeaderAdmin from "../HeaderAdmin";
import AdminSideBar from "../Sidebar/AdminSidebar";
import Footer from "../../Footer";
import { useTranslation } from "react-i18next";
import { getStatistics } from "../../../api/statistics";
import ButtonPDF from "../pdf/ButtonPDF";
function StatisticsPanel() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const allStatistics = useSelector(selectStatistics);
  const isLoadingStatistics = useSelector(selectIsLoadingStatistics);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getStatisticsRequest());
    getStatistics(token)
      .then((data) => {
        dispatch(getStatisticSuccess(data));
      })
      .catch((error) => dispatch(getStatisticsFailure(error)));
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HeaderAdmin />
        <div className="flex flex-1">
          <AdminSideBar />
          {/* Contenido principal */}
          <div className="flex flex-col flex-1">
            <section className="flex flex-col px-10 m-0 items-center gap-S8 ">
              <h1 className="font-Montserrat font-bold text-3xl mt-14">
                {t("statistics")}
              </h1>

              <ButtonPDF data={allStatistics} /> 
              {isLoadingStatistics ? (
                <CenteredSpinner />
              ) : (
                <>
                  {Array.isArray(allStatistics) &&
                  allStatistics.length === 0 ? (
                    <div className="text-center text-3xl text-gray-600 my-28 italic">
                      {t("reservationNotFound")}
                    </div>
                  ) : (
                    <div className="w-full flex flex-col  ">
                      {allStatistics.map((statistics) => (
                        <StatisticsCard
                          key={statistics._id}
                          statistics={statistics}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </section>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default StatisticsPanel;
