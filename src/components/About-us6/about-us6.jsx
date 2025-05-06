import React, { useEffect, useState } from "react";

const AboutUs6 = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    // Parallax effect for background
    const handleScroll = () => {
      const parallaxBg = document.querySelector(".parallax-bg");
      if (parallaxBg) {
        const scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  // Available time slots data
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM"];

  // Calendar data for May 2025
  const calendarDays = [
    [27, 28, 29, 30, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  // Days of week for calendar header
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section
      className="about-ar section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {" "}
      <div
        className="parallax-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/img/arch/slid/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
          opacity: 0.2,
          // Remove transform and transition
        }}
      ></div>
      {/* New Title and Subtitle Section */}
      <div
        className="section-header"
        style={{
          textAlign: "center",
          padding: "4rem 0 2rem",
          color: "white",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "#c69832",
          }}
        >
          Double Your Profits From Real Estate Investment With A Free
          Consultation Now!
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Get a complimentary consultation with real estate investment experts
          to achieve the highest return on investment. Learn how to choose the
          right property for purchase, whether for residential or investment
          purposes.
        </p>
      </div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="img">
              <div className="booking-card">
                <div className="booking-card__header">
                  <div className="profile-header">
                    <div className="avatar-wrapper">
                      <div className="avatar-content">
                        <img src={"/avatar.png"} alt="" />
                      </div>
                    </div>
                    <h2 className="profile-title">Meet with Zoom</h2>
                  </div>
                </div>

                <div className="date-picker">
                  {/* Calendar Section */}
                  <div className="date-picker-header">
                    <button
                      className="month-nav-button disabled"
                      aria-label="Previous month"
                      disabled
                    >
                      <span className="nav-icon">‹</span>
                    </button>
                    <h3 className="month-title">May 2025</h3>
                    <button
                      className="month-nav-button disabled"
                      aria-label="Next month"
                      disabled
                    >
                      <span className="nav-icon">›</span>
                    </button>
                  </div>

                  <div className="calendar-container">
                    <table className="calendar-table">
                      <caption className="calendar-caption">
                        Select a day in May
                      </caption>
                      <thead>
                        <tr>
                          {daysOfWeek.map((day) => (
                            <th key={day} scope="col">
                              <span>{day}</span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {calendarDays.map((week, weekIndex) => (
                          <tr key={weekIndex}>
                            {week.map((day, dayIndex) => (
                              <td key={dayIndex}>
                                <button
                                  className={`date-button ${
                                    selectedDate === day ? "selected" : ""
                                  } ${day < 6 || day > 17 ? "disabled" : ""}`}
                                  onClick={
                                    day >= 6 && day <= 17
                                      ? () => handleDateClick(day)
                                      : undefined
                                  }
                                  disabled={day < 6 || day > 17}
                                >
                                  {day}
                                </button>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Time Slots Section */}
                  <div className="time-slots">
                    <h4 className="time-slots-title">Available Times</h4>
                    <div className="time-buttons">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          className={`time-button ${
                            selectedTime === time ? "selected" : ""
                          }`}
                          onClick={() => handleTimeClick(time)}
                          disabled={!selectedDate}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Section */}
                  <div className="booking-form">
                    <h4 className="form-title">Your Information</h4>
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="form-input"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="form-input"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <button
                      className="submit-button"
                      disabled={!selectedDate || !selectedTime}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 valign" style={{textAlign: "center"}}>
            <div className="content">
              <h3>
                Double Your Profits From Real Estate Investment With A Free
                Consultation Now!
              </h3>
              <p>
                - If you’re an investor seeking the highest return on investment
                or you’re searching for your dream home for you and your family
                in the United Arab Emirates, there are always obstacles to
                achieving these goals:
              </p>
              <p>- Numerous options available in the UAE market.</p>
              <p>
                - Constant confusion in choosing the best real estate project.
              </p>
              <p>
                - Many misleading offers that surprise you with hidden fees and
                undisclosed payments in advertisements.
              </p>
              <p>
                Having a very limited budget and not knowing if it’s sufficient
                for any project currently.
              </p>
              <p>
                Or facing many concerns upon project delivery, such as delivery
                dates or the ease of selling or renting the property after
                delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .booking-card {
          background: #000000;
          border-radius: 12px;
          overflow: hidden;
          color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          margin-bottom: 2rem;
        }
        
        .booking-card__header {
          padding: 1.5rem 1.5rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .profile-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .avatar-wrapper {
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .profile-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }
        
        .date-picker {
          padding: 1rem 1.5rem;
        }
        
        .selection-summary {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
        }
        
        .selected-info {
          display: flex;
          gap: 0.5rem;
          font-size: 0.95rem;
        }
        
        .info-label {
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .info-value {
          font-weight: 600;
        }
        
        .date-picker-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        
        .month-nav-button {
          background: none;
          border: none;
          color: white;
          opacity: 0.5;
          cursor: pointer;
          font-size: 1.2rem;
          padding: 0.5rem;
        }
        
        .month-nav-button:not(.disabled):hover {
          opacity: 1;
        }
        
        .month-nav-button.disabled {
          cursor: not-allowed;
        }
        
        .month-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          min-width: 6.25rem;
          text-align: center;
          color: #c69832;
        }
        
        .calendar-container {
          margin-bottom: 1rem;
          overflow-x: auto;
        }
        
        .calendar-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 300px;
        }
        
        .calendar-caption {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        
        .calendar-table th {
          padding: 0.5rem 0;
          font-weight: 500;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .calendar-table td {
          text-align: center;
          padding: 0.25rem;
        }
        
        .date-button {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          background: none;
          border: none;
          color: white;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        
        .date-button:not(.disabled):hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .date-button.selected,
        .date-button:not(.disabled):focus {
          background: #c69832;
          color: white;
          outline: none;
        }
        
        .date-button.disabled {
          color: rgba(255, 255, 255, 0.3);
          cursor: not-allowed;
        }
        
        .time-slots {
          padding: 1rem 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .time-slots-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #c69832;
        }
        
        .time-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .time-button {
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          flex: 1 0 calc(33.333% - 0.5rem);
          min-width: 80px;
        }
        
        .time-button:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .time-button.selected,
        .time-button:focus:not(:disabled) {
          background: #c69832;
          outline: none;
        }
        
        .time-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .booking-form {
          padding: 1rem 1.5rem 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .form-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #c69832;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: rgba(255, 255, 255);
        }
        
        .form-input {
          width: 100%;
          padding: 0.625rem 0.75rem;
          border-radius: 6px;
          border: 1px solid #c69832;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #c69832;
          background: rgba(66, 153, 225, 0.1);
        }
        
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .submit-button {
          width: 100%;
          padding: 0.75rem;
          border-radius: 6px;
          background: #c69832;
          border: none;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 0.5rem;
        }
        
        .submit-button:hover:not(:disabled) {
          background: #c69832;
        }
        
        .submit-button:disabled {
          background: #c69832;
          cursor: not-allowed;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }
          
          .section-header {
            padding: 3rem 1rem 1rem;
          }
          .section-header h2 {
            font-size: 2rem;
          }
          .section-header p {
            font-size: 1rem;
            padding: 0 1rem;
          }
        }

          .time-button {
            flex: 1 0 calc(50% - 0.5rem);
          }
          
          .calendar-table td {
            padding: 0.125rem;
          }
          
          .date-button {
            width: 2rem;
            height: 2rem;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 576px) {
          .booking-card__header {
            padding: 1rem;
          }
          
          .date-picker {
            padding: 1rem;
          }
          
          .time-slots, .booking-form {
            padding: 1rem;
          }
          
          .time-button {
            flex: 1 0 100%;
          }
            .section-header {
            padding: 2rem 1rem 1rem;
          }
          .section-header h2 {
            font-size: 1.75rem;
          }
        }
        }

      `}</style>
    </section>
  );
};

export default AboutUs6;
