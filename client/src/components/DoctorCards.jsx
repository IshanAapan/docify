import "../assets/styles/DoctorCards.css";
const DoctorCards = () => {
  return (
    <div className={`card`}>
      <div className={`card-img flex-center`}>
        <img
          src={
            // ele?.userId?.pic ||
            "data:image/jpeg;base64,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"
          }
          alt="profile"
        />
      </div>
      <h3 className="card-name Dcommon">
        {/* Dr. {ele?.userId?.firstname + " " + ele?.userId?.lastname} */}
        Dr. Lawrence Espinoza
      </h3>
      <p className="Dspecialization Dcommon">
        <strong>Specialization: </strong>
        {/* {ele?.specialization} */}
        Heart
      </p>
      <p className="Dexperience Dcommon">
        <strong>Experience: </strong>
        {/* {ele?.experience}yrs */}
        10yrs
      </p>
      <p className="Dfees Dcommon">
        <strong>Fees: </strong>
        {/* $ {ele?.fees} */}$ 10
      </p>
      <p className="Dphone Dcommon">
        <strong>Phone: </strong>
        {/* {ele?.userId?.mobile} */}
        9874561230
      </p>
      <button
        className="btn appointment-btn"
        // onClick={handleModal}
      >
        Book Appointment
      </button>
      {/* {modalOpen && (
            <BookAppointment
              setModalOpen={setModalOpen}
              ele={ele}
            />
          )} */}
    </div>
  );
};

export default DoctorCards;
