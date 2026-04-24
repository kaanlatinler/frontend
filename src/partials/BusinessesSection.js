import StatisticCard from "@/Components/StatisticCard";
import React, { useEffect, useState } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import ProfileCard from "@/Components/ProfileCard";
import BusinessCard from "@/Components/BusinessCard";
import { AddBusiness } from "@/services/api";
import { GetBusinesses } from "@/services/api";
import Spinner from "@/Components/ui/Spinner";

async function getBusinesses({ token }) {
  try {
    return await GetBusinesses(token);
  } catch (error) {
    console.error("Error fetching businesses:", error);
    return [];
  }
}

const BusinessesSection = ({ profile, businessCount, employeeCount }) => {
  const [showModal, setShowModal] = useState(false);
  const [business, setBusiness] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      getBusinesses({ token }).then((data) => {
        setBusiness(data);
        setLoading(false);
      });
    }
  }, []); // useEffect sadece sayfa yüklendiğinde çalışır.

  if (!profile) {
    return <Spinner />;
  }

  return (
    <div className="page-content">
      <section className="row">
        <ProfileCard profile={profile} />
        <div className="col-12 col-lg-3 col-md-3">
          <StatisticCard
            title="İşletme Sayısı"
            value={businessCount}
            icon={<FaRegBuilding className="text-white fs-3" />}
            variant="purple"
          />
        </div>
        <div className="col-12 col-lg-3 col-md-3">
          <StatisticCard
            title="Çalışan Sayısı"
            value={employeeCount}
            icon={<MdOutlinePeopleAlt className="text-white fs-3" />}
            variant="blue"
          />
        </div>
        <div className="col-12 col-lg-3 col-md-3">
          <StatisticCard
            title="Toplam Kazanç"
            value="170.250 ₺"
            icon={<FaRegMoneyBill1 className="text-white fs-3" />}
            variant="green"
          />
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            <div
              className="business-card bg-dark text-white rounded"
              onClick={() => setShowModal(true)}
            >
              <svg
                fill="#ffffff"
                viewBox="-1 2 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </div>
            {showModal && (
              <RenderAddBusinessModal onClose={() => setShowModal(false)} />
            )}
          </div>
          {loading ? (
            <Spinner />
          ) : business ? (
            business.map((b, index) => (
              <div className="col-12 col-md-3" key={index}>
                <BusinessCard b={b} />
              </div>
            ))
          ) : (
            <div>No businesses available.</div>
          )}
        </div>
      </section>
    </div>
  );
};

const RenderAddBusinessModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    try {
      await AddBusiness(formData, token);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error adding business:", error);
    }
  };

  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">İşletme Ekle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  İşletme Adı
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-posta
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Adres
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  rows="3"
                  name="Address"
                  value={formData.Address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                İptal
              </button>
              <button type="submit" className="btn btn-primary">
                Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessesSection;
