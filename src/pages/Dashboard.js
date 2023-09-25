import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <nav className={styles.headerParent} id="Navbar" >
        <a className={styles.header} id="Dashboard">
          <img className={styles.logoIcon} alt="" src="/logo.svg" />
        </a>
        <button className={styles.navItemBase} id="Dashboard">
          <div className={styles.content}>
            <img className={styles.barChart2Icon} alt="" src="/barchart2.svg" />
            <div className={styles.text}>Dashboard</div>
          </div>
        </button>
        <button className={styles.navItemBase1} id="Projects">
          <div className={styles.content}>
            <img className={styles.barChart2Icon} alt="" src="/3layers.svg" />
            <div className={styles.text}>Projects</div>
          </div>
        </button>
        <button className={styles.navItemBase2} id="Staffing">
          <div className={styles.content}>
            <img className={styles.barChart2Icon} alt="" src="/users.svg" />
            <div className={styles.text}>Staffing</div>
          </div>
        </button>
        <button className={styles.navItemBase3} id="Messages">
          <div className={styles.content}>
            <img
              className={styles.barChart2Icon}
              alt=""
              src="/solarchatlinebroken.svg"
            />
            <div className={styles.text}>Messages</div>
          </div>
        </button>
        <button className={styles.navItemBase4} id="Support">
          <div className={styles.content}>
            <img
              className={styles.barChart2Icon}
              alt=""
              src="/barchart21.svg"
            />
            <div className={styles.text4}>Support</div>
          </div>
        </button>
        <button className={styles.navItemBase5} id="Settings">
          <div className={styles.content}>
            <img className={styles.barChart2Icon} alt="" src="/settings.svg" />
            <div className={styles.text4}>Settings</div>
          </div>
        </button>
        <button className={styles.footer} id="Logout">
          <img className={styles.dividerIcon} alt="" src="/divider.svg" />
          <div className={styles.account}>
            <div className={styles.content}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.textAndSupportingText}>
                <div className={styles.text6}>Olivia Rhye</div>
                <div className={styles.supportingText}>
                  olivia@untitledui.com
                </div>
              </div>
            </div>
            <div className={styles.icon}>
              <div className={styles.button}>
                <div className={styles.buttonBase}>
                  <img className={styles.logOutIcon} alt="" src="/logout.svg" />
                </div>
              </div>
            </div>
          </div>
        </button>
      </nav>
      <footer className={styles.footer1} id="footer">
        <div className={styles.footerChild} />
        <div className={styles.copyright2023}>
          Copyright © 2023. Reslink. All rights reserved.
        </div>
      </footer>
      <div className={styles.frame}>
        <div className={styles.largeInput}>
          <div className={styles.background}>
            <div className={styles.backgroundChild} />
          </div>
          <input
            className={styles.text7}
            name="Search"
            id="Search"
            placeholder="Search"
            type="text" width="400px"
          />
          <img className={styles.searchIcon} alt="" src="/search-icon1.svg" />
        </div>
      </div>
      <div className={styles.frame1}>
        <button className={styles.button1} id="NewProject">
          <div className={styles.buttonBase1}>
            <img className={styles.logOutIcon} alt="" src="/plus.svg" />
            <div className={styles.text6}>Create New Project</div>
          </div>
        </button>
      </div>
      <div className={styles.frame2}>
        <button
          className={styles.vuesaxlinearnotificationWrapper}
          id="Notifications"
        >
          <img
            className={styles.vuesaxlinearnotificationIcon}
            alt=""
            src="/vuesaxlinearnotification1.svg"
          />
        </button>
      </div>
      <main className={styles.headerSectionParent} id="Main">
        <div className={styles.headerSection}>
          <div className={styles.container}>
            <div className={styles.textAndSupportingText}>
              <div className={styles.content6}>
                <div className={styles.textAndSupportingText1}>
                  <div className={styles.text9}>Welcome back, Olivia</div>
                  <div className={styles.supportingText1}>
                    Track, manage researchers and submissions.
                  </div>
                </div>
                <div className={styles.actions}>
                  <div className={styles.button04}>
                    <div className={styles.buttonBase2}>
                      <div className={styles.text10}>Tertiary</div>
                    </div>
                  </div>
                  <div className={styles.button03}>
                    <div className={styles.buttonBase3}>
                      <div className={styles.text10}>Secondary</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.metricGroup}>
          <div className={styles.metricItem}>
            <div className={styles.numberAndChartParent}>
              <div className={styles.numberAndChart}>
                <div className={styles.textAndSupportingText}>
                  <div className={styles.number}>07</div>
                </div>
              </div>
              <div className={styles.headingAndDropdown}>
                <div className={styles.heading}>Active Projects</div>
              </div>
            </div>
            <button className={styles.ellipseParent} id="ActiveProjects">
              <div className={styles.frameChild} />
              <img
                className={styles.fluentperson32RegularIcon}
                alt=""
                src="/fluentperson32regular.svg"
              />
            </button>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.numberAndChartParent}>
              <div className={styles.numberAndChart}>
                <div className={styles.textAndSupportingText}>
                  <div className={styles.number}>04</div>
                </div>
              </div>
              <div className={styles.headingAndDropdown}>
                <div className={styles.heading}>Proposals</div>
              </div>
            </div>
            <button className={styles.ellipseParent} id="Proposals">
              <div className={styles.frameChild} />
              <img
                className={styles.basileditOutlineIcon}
                alt=""
                src="/basileditoutline.svg"
              />
            </button>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.numberAndChartParent}>
              <div className={styles.numberAndChart}>
                <div className={styles.textAndSupportingText}>
                  <div className={styles.number}>03</div>
                </div>
              </div>
              <div className={styles.headingAndDropdown}>
                <div className={styles.heading}>Active Jobs</div>
              </div>
            </div>
            <button className={styles.ellipseParent} id="ActiveJobs">
              <div className={styles.frameChild} />
              <img
                className={styles.basileditOutlineIcon}
                alt=""
                src="/solarbookmarkbroken.svg"
              />
            </button>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.numberAndChartParent}>
              <div className={styles.numberAndChart}>
                <div className={styles.textAndSupportingText}>
                  <div className={styles.number}>240</div>
                </div>
              </div>
              <div className={styles.headingAndDropdown}>
                <div className={styles.heading}>Application</div>
              </div>
            </div>
            <button className={styles.ellipseParent} id="Applications">
              <div className={styles.frameChild} />
              <img
                className={styles.fluentperson32RegularIcon}
                alt=""
                src="/carbonview.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.metricItemParent}>
          <div className={styles.metricItem4}>
            <div className={styles.heading4}>Posted Projects</div>
            <button
              className={styles.text12}
              id="ViewAll"
            >{`See All  `}</button>
            <div className={styles.metricItemChild} />
            <div className={styles.frameParent}>
              <div className={styles.thermalProtectivePerformanceParent}>
                <div className={styles.thermalProtectivePerformance}>
                  Thermal protective performance an..
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameChild1} />
                  <div className={styles.resumeReview}>Resume review</div>
                </div>
              </div>
              <div className={styles.thermalProtectivePerformanceParent}>
                <div className={styles.thermalProtectivePerformance}>
                  Effect of heat flux and moisture cont..
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.ellipseParent1}>
                    <div className={styles.frameChild2} />
                    <div className={styles.resumeReview}>Interview</div>
                  </div>
                </div>
              </div>
              <div className={styles.thermalProtectivePerformanceParent}>
                <div className={styles.thermalProtectivePerformance}>
                  Thermal protective performance an..
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.ellipseParent2}>
                    <div className={styles.frameChild3} />
                    <div className={styles.resumeReview}>Task</div>
                  </div>
                </div>
              </div>
              <div className={styles.thermalProtectivePerformanceParent}>
                <div className={styles.thermalProtectivePerformance}>
                  Testing and evaluation of functional..
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.ellipseParent2}>
                    <div className={styles.frameChild4} />
                    <div className={styles.resumeReview}>Payment</div>
                  </div>
                </div>
              </div>
              <div className={styles.thermalProtectivePerformanceParent}>
                <div className={styles.thermalProtectivePerformance}>
                  Development of thermal liner for Ext..
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.ellipseParent1}>
                    <div className={styles.frameChild5} />
                    <div className={styles.resumeReview}>Closed</div>
                  </div>
                </div>
              </div>
              <div className={styles.thermalProtectivePerformanceParent}>
                <div className={styles.thermalProtectivePerformance}>
                  Testing and evaluation of functional..
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.ellipseParent1}>
                    <div className={styles.frameChild4} />
                    <div className={styles.resumeReview}>Payment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.metricItem4}>
            <div className={styles.heading5}>Recent Activities</div>
            <div className={styles.metricItemItem} />
            <div className={styles.frameParent}>
              <div className={styles.ellipseParent6}>
                <div className={styles.frameChild3} />
                <div className={styles.interviewIsScheduled}>
                  Interview is scheduled for 12PM
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.pm}>6:29PM</div>
                </div>
              </div>
              <div className={styles.ellipseParent6}>
                <div className={styles.frameChild1} />
                <div className={styles.interviewIsScheduled}>
                  Applicant applied on Technical resear..
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.pm}>8:21PM</div>
                </div>
              </div>
              <div className={styles.ellipseParent6}>
                <div className={styles.frameChild2} />
                <div className={styles.interviewIsScheduled}>
                  Interview is cancelled
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.pm}>7:10PM</div>
                </div>
              </div>
              <div className={styles.ellipseParent6}>
                <div className={styles.frameChild1} />
                <div className={styles.interviewIsScheduled}>
                  Applicant applied on Technical resear..
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.pm}>6:29PM</div>
                </div>
              </div>
              <div className={styles.ellipseParent6}>
                <div className={styles.frameChild4} />
                <div className={styles.interviewIsScheduled}>
                  Recieved Proposal
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.pm}>6:29PM</div>
                </div>
              </div>
              <div className={styles.ellipseParent6}>
                <div className={styles.frameChild3} />
                <div className={styles.interviewIsScheduled}>
                  Interview is scheduled for 12PM
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.pm}>6:29PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
