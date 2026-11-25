(function () {

  /* =========================================
     COMPLETE 2026-2027 CALENDAR EVENT DATA
     ========================================= */

  const FORMAL_URL =
    "https://docs.google.com/document/d/17nsXd-sKs7ltVdPCApq-pkBPNkoQ4nAJPrSfrANaobE/edit?usp=sharing";

  const FORMAL =
    `<a href="${FORMAL_URL}" target="_blank" rel="noopener noreferrer">Formal</a>`;

  const CASUAL =
    `<a href="${FORMAL_URL}" target="_blank" rel="noopener noreferrer">Casual</a>`;

  const EVENTS = [

    /* HIGH SCHOOL EVENTS */

    {
      id: "event-wbhs-halloween",
      g: "wbhs",
      d: "2026-10-27",
      to: "2026-10-27",
      label: "Oct 27",
      k: "Concert",
      t: "Halloween Concert",
      short: "7:00 PM • Location TBD",
      details: `
        <p><strong>Tuesday, October 27, 2026</strong></p>
        <p><strong>7:00 PM</strong></p>
        <p>Location will be posted when available.</p>
      `
    },

    {
      id: "event-wbhs-winter",
      g: "wbhs",
      d: "2027-01-15",
      to: "2027-01-15",
      label: "Jan 15",
      k: "Concert",
      t: "Winter Concert",
      short: "7:00 PM • Western Branch High School",
      details: `
        <p><strong>Friday, January 15, 2027</strong></p>
        <p><strong>7:00 PM</strong></p>
        <p><strong>Location:</strong> Western Branch High School</p>
      `
    },

    {
      id: "event-wbhs-disney",
      g: "wbhs",
      d: "2027-03-25",
      to: "2027-03-29",
      label: "Mar 25-29",
      k: "Trip",
      t: "Disney Trip",
      short: "Disney Trip",
      details: `
        <p><strong>March 25-29, 2027</strong></p>
        <p>
          Additional trip information will be provided
          to participating students and families.
        </p>
      `
    },

    {
      id: "event-wbhs-spring",
      g: "wbhs",
      d: "2027-06-01",
      to: "2027-06-01",
      label: "Jun 1",
      k: "Concert",
      t: "Spring Concert",
      short: "7:00 PM",
      details: `
        <p><strong>Tuesday, June 1, 2027</strong></p>
        <p><strong>7:00 PM</strong></p>
        <p>Location will be posted when available.</p>
      `
    },

    /* JOLLIFF MIDDLE SCHOOL EVENTS */

    {
      id: "event-jms-spirit-wear",
      g: "jms",
      d: "2026-10-01",
      to: "2026-10-01",
      label: "Oct 1",
      k: "Deadline",
      t: "Jolliff Orchestra Spirit Wear Order Deadline",
      short: "Spirit wear orders due",
      details: `
        <p><strong>Thursday, October 1, 2026</strong></p>
        <p>
          Spirit wear is available for all 6th grade
          orchestra students and interested 7th and
          8th grade students.
        </p>
        <p>
          Orders must be submitted using the paper
          order form with <strong>cash or check</strong>.
          Electronic ordering and Givebacks are
          not available for spirit wear.
        </p>
        <p>
          <a href="fundraising.html#spirit-wear">
            Spirit Wear Information &amp; Order Form
          </a>
        </p>
      `
    },

    {
      id: "event-jms-jr-district-audition",
      g: "jms",
      d: "2026-10-24",
      to: "2026-10-24",
      label: "Oct 24",
      k: "Audition",
      t: "Jr. District Audition",
      short: "Interested 7th & 8th • Jolliff MS",
      details: `
        <p><strong>Saturday, October 24, 2026</strong></p>
        <p>Interested 7th and 8th grade students</p>
        <p><strong>Location:</strong> Jolliff Middle School</p>
        <p><strong>Report:</strong> 8:30 AM to 3:30 PM</p>
        <p>
          Individual time slots were scheduled
          to be released by October 16, 2026.
        </p>
      `
    },

    {
      id: "event-jms-fall-concert",
      g: "jms",
      d: "2026-10-27",
      to: "2026-10-27",
      label: "Oct 27",
      k: "Concert",
      t: "Fall Concert",
      short: "8th Grade* • 7:00 PM",
      details: `
        <p><strong>Tuesday, October 27, 2026</strong></p>
        <p>8th Grade*</p>
        <p><strong>Location:</strong> Western Branch High School</p>
        <p><strong>Report:</strong> 5:45 PM</p>
        <p><strong>Performance:</strong> 7:00 PM</p>
        <p><strong>Attire:</strong> ${FORMAL}</p>
      `
    },

    {
      id: "event-jms-va-arts",
      g: "jms",
      d: "2026-11-19",
      to: "2026-11-19",
      label: "Nov 19",
      k: "Performance",
      t: "VA Arts Festival Quartet Performance",
      short: "6th, 7th & 8th • 9:30 AM • Not open to the public",
      details: `
        <p><strong>Thursday, November 19, 2026</strong></p>
        <p>6th, 7th and 8th Grade</p>
        <p><strong>Location:</strong> Jolliff Middle School</p>
        <p><strong>Report:</strong> 9:15 AM, released from class</p>
        <p><strong>Performance:</strong> 9:30 AM</p>
        <p><strong>Not open to the public.</strong></p>
      `
    },

    /* UPDATED DECEMBER 10 WINTER CONCERT */

    {
      id: "event-jms-winter",
      g: "jms",
      d: "2026-12-10",
      to: "2026-12-10",
      label: "Dec 10",
      k: "Concert",
      t: "Winter Concert",
      short: "6th*, 7th* & 8th* • 7:30 PM • Jolliff Auditorium",
      details: `

        <p>
          <strong>Thursday, December 10, 2026</strong>
        </p>

        <p>
          <strong>Grades:</strong>
          6th*, 7th* and 8th* (required performance)
        </p>

        <p>
          <strong>Location:</strong>
          Jolliff Middle School Auditorium
        </p>

        <p>
          <strong>Performance:</strong> 7:30 PM
        </p>

        <div class="winter-concert-notice">

          <strong>Student Report Times and Rooms:</strong>

          <ul class="concert-report-list">

            <li>
              <strong>6th Grade:</strong>
              By 7:10 PM, Orchestra Room
            </li>

            <li>
              <strong>7th Grade:</strong>
              By 6:40 PM, Chorus Room
            </li>

            <li>
              <strong>8th Grade:</strong>
              By 6:50 PM, Band Room
            </li>

          </ul>

          <p>
            <strong>Arrival:</strong>
            Please do not arrive before 6:30 PM
            unless accompanying a parent
            volunteering for Mrs. Rose.
          </p>

        </div>

        <p>
          <strong>Attire:</strong> ${FORMAL}
        </p>

        <details class="event-instructions">

          <summary>
            Student &amp; Parent Instructions
          </summary>

          <div class="event-instructions-body">

            <h4>Attendance</h4>

            <p>
              Participation is expected under the
              <a
                href="https://docs.google.com/document/d/1X-eu34mQdecRtrc6mlpTvvafs2Cte9ODCtU2_crjRuU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                CPS Music Performance Attendance Policy
              </a>.
              Students are expected to remain for
              the entire concert and show appropriate
              concert etiquette as audience members.
            </p>

            <p>
              Parents or guardians should contact
              Mrs. Rose immediately about any
              attendance concerns.
            </p>

            <h4>Instrument Instructions</h4>

            <p>
              Students may leave violins, violas,
              home cellos, and home basses in the
              orchestra room between the end of
              the school day and the concert.
            </p>

            <p>
              Personal instruments must be taken
              home after the concert and do not
              need to be brought back the
              following school day.
            </p>

            <p>
              Cello and bass students may use their
              preferred school or home instrument
              for the concert.
            </p>

            <p>
              Students may bring their home instrument
              for tuning and inspection before the
              concert even if they plan to use
              a school instrument onstage.
            </p>

            <h4>Grading and Concert Etiquette</h4>

            <p>
              The concert counts as a lab grade.
              To receive full credit, students
              must arrive on time, wear the required
              performance attire, have all materials,
              and follow appropriate concert etiquette.
            </p>

            <p>
              Students must not use electronic devices
              during any part of the concert.
            </p>

            <p>
              Refer to Mrs. Rosenberg's concert
              notice for the complete grading
              and etiquette guidance.
            </p>

            <h4>Valuables</h4>

            <p>
              Do not leave valuables in changing
              areas. These rooms will not be
              locked during the concert.
            </p>

            <p>
              The school district is not responsible
              for lost or stolen items.
            </p>

          </div>

        </details>

      `
    },

    {
      id: "event-jms-jr-district-event",
      g: "jms",
      d: "2027-01-15",
      to: "2027-01-15",
      label: "Jan 15",
      k: "District Event",
      t: "Jr. District Event",
      short: "Select 7th & 8th • 6:30 PM",
      details: `
        <p><strong>Friday, January 15, 2027</strong></p>
        <p>Select 7th and 8th grade students</p>
        <p><strong>Location:</strong> Western Branch High School</p>
        <p><strong>Depart:</strong> 9:00 AM, released from class</p>
        <p><strong>Performance:</strong> 6:30 PM</p>
        <p><strong>Attire:</strong> ${FORMAL}</p>
      `
    },

    {
      id: "event-jms-rising-sixth",
      g: "jms",
      d: "2027-01-20",
      to: "2027-01-21",
      label: "Jan 20-21",
      k: "Performance",
      t: "Rising 6th Grade Performances",
      short: "8th Grade* • TBD with select 7th",
      details: `
        <p>
          <strong>
            Tentatively Wednesday, January 20
            and Thursday, January 21, 2027
          </strong>
        </p>
        <p>
          8th Grade* (TBD with select 7th grade students)
        </p>
        <p><strong>Location:</strong> Jolliff Middle School</p>
        <p><strong>Report:</strong> 9:50 AM, released from class</p>
        <p><strong>Performance:</strong> Approximately 10:45 AM</p>
        <p><strong>Not open to the public.</strong></p>
        <p><strong>Attire:</strong> ${CASUAL}</p>
      `
    },

    {
      id: "event-jms-preassessment",
      g: "jms",
      d: "2027-03-10",
      to: "2027-03-10",
      label: "Mar 10",
      k: "Concert",
      t: "Pre-Assessment Concert",
      short: "8th Grade* • 7:00 PM",
      details: `
        <p><strong>Wednesday, March 10, 2027</strong></p>
        <p>8th Grade*</p>
        <p><strong>Location:</strong> Jolliff Middle School</p>
        <p><strong>Report:</strong> By 6:20 PM</p>
        <p><strong>Performance:</strong> 7:00 PM</p>
        <p><strong>Attire:</strong> ${FORMAL}</p>
      `
    },

    {
      id: "event-jms-state-assessment",
      g: "jms",
      d: "2027-03-16",
      to: "2027-03-18",
      label: "Mar 16-18",
      k: "Assessment",
      t: "State Assessment Performance",
      short: "8th Grade* • Details TBD",
      details: `
        <p><strong>March 16, 17, or 18, 2027</strong></p>
        <p>8th Grade*</p>
        <p>
          Date, location, report time, departure time,
          return time, and performance time
          are to be determined.
        </p>
        <p><strong>Attire:</strong> ${FORMAL}</p>
      `
    },

    {
      id: "event-jms-miosm",
      g: "jms",
      d: "2027-03-25",
      to: "2027-03-25",
      label: "Mar 25",
      k: "Performance",
      t: "Music In Our Schools Month Concert",
      short: "6th Grade* • 2:15 PM",
      details: `
        <p><strong>Thursday, March 25, 2027</strong></p>
        <p>6th Grade*</p>
        <p><strong>Location:</strong> Jolliff Middle School</p>
        <p><strong>Report:</strong> 1:40 PM, released from class</p>
        <p><strong>Performance:</strong> 2:15 PM</p>
        <p><strong>Attire:</strong> ${CASUAL}</p>
      `
    },

    {
      id: "event-jms-all-city",
      g: "jms",
      d: "2027-04-23",
      to: "2027-04-23",
      label: "Apr 23",
      k: "All-City",
      t: "All-City Event",
      short: "Select 6th & 7th • 6:30 PM",
      details: `
        <p><strong>Friday, April 23, 2027</strong></p>
        <p>Select 6th and 7th grade students</p>
        <p><strong>Location:</strong> Greenbrier Middle School</p>
        <p><strong>Depart:</strong> 9:00 AM, released from class</p>
        <p><strong>Performance:</strong> 6:30 PM</p>
        <p><strong>Attire:</strong> ${FORMAL}</p>
      `
    },

    {
      id: "event-jms-spring-seven",
      g: "jms",
      d: "2027-05-04",
      to: "2027-05-04",
      label: "May 4",
      k: "Concert",
      t: "Spring Concert - 7th Grade",
      short: "7th Grade* • 7:00 PM",
      details: `
        <p><strong>Tuesday, May 4, 2027</strong></p>
        <p>7th Grade*</p>
        <p><strong>Location:</strong> Jolliff Middle School</p>
        <p><strong>Report:</strong> By 6:20 PM</p>
        <p><strong>Performance:</strong> 7:00 PM</p>
        <p><strong>Attire:</strong> ${FORMAL}</p>
      `
    },

    {
      id: "event-jms-spring-six-eight",
      g: "jms",
      d: "2027-05-05",
      to: "2027-05-05",
      label: "May 5",
      k: "Concert",
      t: "Spring Concert - 6th & 8th Grade",
      short: "6th* & 8th* Grade • 7:00 PM",
      details: `
        <p><strong>Wednesday, May 5, 2027</strong></p>
        <p>6th Grade* and 8th Grade*</p>
        <p><strong>Location:</strong> Jolliff Middle School</p>
        <p>
          <strong>Report Times:</strong><br>
          6th Grade: by 6:40 PM<br>
          8th Grade: by 6:20 PM
        </p>
        <p><strong>Performance:</strong> 7:00 PM</p>
        <p><strong>Attire:</strong> ${FORMAL}</p>
      `
    },

    {
      id: "event-jms-music-parks",
      g: "jms",
      d: "2027-06-05",
      to: "2027-06-05",
      label: "Jun 5",
      k: "Performance / Trip",
      t: "Music In The Parks Performance",
      short: "Interested 8th Grade • Busch Gardens",
      details: `
        <p><strong>Saturday, June 5, 2027</strong></p>
        <p>Interested 8th grade students</p>
        <p>
          Competition at a Peninsula-area school
          followed by Busch Gardens.
        </p>
        <p>
          Report, departure, return, and performance
          times are to be determined.
        </p>
        <p><strong>Attire:</strong> ${CASUAL}</p>
      `
    },

    /* COMMUNITY OPPORTUNITIES */

    {
      id: "event-community-vso",
      g: "community",
      d: "2026-10-04",
      to: "2026-10-04",
      label: "Oct 4",
      k: "Free Community Event",
      t: "CommUNITY Play-In & Sing-Along",
      short: "VSO Play-In & Sing-Along • 3:00 PM",
      details: `
        <p><strong>Sunday, October 4, 2026</strong></p>
        <p><strong>3:00 PM</strong></p>
        <p>
          <strong>Location:</strong>
          Booker T. Washington High School<br>
          1111 Park Avenue<br>
          Norfolk, VA 23504
        </p>
        <p>
          This free event gives community musicians and
          singers an opportunity to play and sing alongside
          Virginia Symphony Orchestra musicians and the
          Virginia Symphony Orchestra Chorus.
        </p>
        <p><strong>Free and open to the public.</strong></p>
        <p>
          <a
            href="https://drive.google.com/file/d/1wK6Qj-vyXkRnGMRbOAqe0z4YE-eYya92/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            View Virginia Symphony Opportunities &amp; Flyers
          </a>
        </p>
      `
    },

    /* WBOPA EVENTS */

    {
      id: "event-wbopa-flower-deadline",
      g: "community",
      d: "2026-10-06",
      to: "2026-10-06",
      label: "Oct 6",
      k: "Fundraiser",
      t: "Fall Flower Sale Order Deadline",
      short: "Fall Flower Sale orders due",
      details: `
        <p><strong>Tuesday, October 6, 2026</strong></p>
        <p>
          Online orders for the 2026 WBOPA Fall Flower
          Sale are due by October 6.
        </p>
        <p>
          Paper orders being mailed must be postmarked
          by September 30. Completed paper forms may
          also be turned in to an orchestra director.
        </p>
        <p>
          <a href="fundraising.html#flowers">
            Flower Sale Information &amp; Ordering
          </a>
        </p>
      `
    },

    {
      id: "event-wbopa-red-robin",
      g: "community",
      d: "2026-10-07",
      to: "2026-10-07",
      label: "Oct 7",
      k: "Fundraiser",
      t: "Red Robin Giveback Fundraiser",
      short: "Red Robin Giveback • 20% of eligible food sales",
      details: `
        <p><strong>Wednesday, October 7, 2026</strong></p>
        <p>
          Red Robin will give
          <strong>20% of eligible food sales</strong>
          back to support the Western Branch
          Orchestra Parents Association.
        </p>
        <p>
          <strong>Location:</strong><br>
          Red Robin<br>
          2524 Chesapeake Sq Ring Rd<br>
          Chesapeake, VA 23321
        </p>
        <p>
          For dine-in orders, show the fundraiser flyer
          or mention the fundraiser to your server.
        </p>
        <p>
          Online and to-go orders can also qualify
          when fundraiser instructions are followed.
        </p>
        <p>
          <a href="fundraising.html#red-robin">
            View Red Robin Fundraiser Details
          </a>
        </p>
      `
    },

    {
      id: "event-wbopa-october-meeting",
      g: "community",
      d: "2026-10-08",
      to: "2026-10-08",
      label: "Oct 8",
      k: "Meeting",
      t: "WBOPA Monthly Meeting",
      short: "Monthly Meeting • 7:30 PM",
      details: `
        <p><strong>Thursday, October 8, 2026</strong></p>
        <p><strong>7:30 PM</strong></p>
        <p>The meeting will be held virtually via Zoom.</p>
        <p>
          Regular WBOPA meetings are held on the
          second Thursday of each month during the school year.
        </p>
        <p>Contact WBOPA for the current Zoom meeting link.</p>
        <p>
          <a href="parents.html#meetings">
            Meeting Information
          </a>
        </p>
      `
    },

    {
      id: "event-wbopa-flower-pickup",
      g: "community",
      d: "2026-10-10",
      to: "2026-10-10",
      label: "Oct 10",
      k: "Fundraiser / Volunteer",
      t: "Fall Flower Sale Pickup & Volunteer Day",
      short: "Flower Pickup • 8:45 AM to 11:00 AM",
      details: `
        <p><strong>Saturday, October 10, 2026</strong></p>
        <p>
          <strong>Location:</strong>
          Western Branch High School Bus Ramp<br>
          1968 Bruin Place, Chesapeake, VA 23321
        </p>
        <p><strong>Customer Pickup:</strong> 8:45 AM to 11:00 AM</p>
        <p>
          <strong>Volunteer Shifts:</strong><br>
          7:00 AM to 9:00 AM<br>
          9:00 AM to 11:00 AM
        </p>
        <p>
          Student and parent volunteers are welcome.
          Students needing service hours should confirm
          eligibility with their school or organization.
        </p>
        <p>
          <a href="fundraising.html#flowers">
            View Flower Sale &amp; Volunteer Information
          </a>
        </p>
      `
    },

    {
      id: "event-wbopa-november-meeting",
      g: "community",
      d: "2026-11-12",
      to: "2026-11-12",
      label: "Nov 12",
      k: "Meeting",
      t: "WBOPA Monthly Meeting",
      short: "Monthly Meeting • 7:30 PM",
      details: `
        <p><strong>Thursday, November 12, 2026</strong></p>
        <p><strong>7:30 PM</strong></p>
        <p>The meeting will be held virtually via Zoom.</p>
        <p>
          Regular WBOPA meetings are held on the
          second Thursday of each month during the school year.
        </p>
        <p>Contact WBOPA for the current Zoom meeting link.</p>
        <p>
          <a href="parents.html#meetings">
            Meeting Information
          </a>
        </p>
      `
    }

  ];

  function localDate(value) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function eventsByDate(now = new Date()) {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const events = EVENTS.map(function (event) {
      return {
        ...event,
        start: localDate(event.d),
        finish: localDate(event.to || event.d)
      };
    }).sort(function (a, b) {
      return a.start - b.start;
    });

    return {
      upcoming: events.filter(event => event.finish >= today),
      past: events.filter(event => event.finish < today)
    };
  }

  function groupName(event) {
    if (event.g === "wbhs") return "WBHS";
    if (event.g === "jms") return "JMS";
    if (event.id.startsWith("event-wbopa-")) return "WBOPA";
    return "Community";
  }

  window.orchestraCalendar = { eventsByDate, groupName };

})();
