import CubeSpace from "../three-components/cubeSpace";
import CylinderSpace from "../three-components/cyclinderSpace";
import HorizontalCylinderSpace from "../three-components/horizontalCylinderSpace";
import RingShape from "../three-components/ringShape";
import ShapeSpace from "../three-components/shapeSpace";
import SimilarCylinderSpace from "../three-components/similarCyclinderSpace";
import WeirdCylinderShape from "../three-components/weirdCylinderSpace";

const GridBoxes = (props) => {
  const {} = props;

  const iterateLayout = (_grid) => (
    <>
      {_grid.map((_) => {
        return (
          <div
            className="block"
            style={{
              width: _.width,
              height: _.height,
              flexDirection: _.flexDirection || "row",
              background: _.background || (_.layout ? "#000" : "#fff"),
              borderRadius: _.borderRadius || "15px",
              border: _.layout ? "none" : "1px solid #000",
            }}
          >
            {_.layout && iterateLayout(_.layout)}
            {_.content}
          </div>
        );
      })}
      <style jsx>
        {`
          .block {
            display: flex;
            flex-direction: row;
            background: #f50;
            position: relative;
          }
        `}
      </style>
    </>
  );
  return (
    <>
      <div className="grid-boxes-outer">
        <div className="grid-boxes">{iterateLayout(grid)}</div>
      </div>
      <style jsx>
        {`
          .grid-boxes {
            width: calc(100vw - 10px);
            height: calc(100vh - 10px);
            background: #000;
          }
          .grid-boxes-outer {
            width: 100vw;
            height: 100vh;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default GridBoxes;

const currentDate = () => {
  let date = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var day = date.getDate();
  var month = date.getMonth();
  month = months[month];
  var year = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  return day + " " + month + " " + year;
};

const currentTime = () => {
  let date = new Date();
  return date.getHours() + ":" + date.getMinutes();
};

const grid = [
  {
    width: "100%",
    height: "70%",
    layout: [
      {
        width: "calc(50% - 2px)",
        height: "calc(100% - 2px)",
        content: (
          <>
            <div className="content"></div>
            <div className="main-box">
              <div className="top">
                <label>HELLO, THIS IS A GRIDDD</label>
                <label>HELLO, THIS IS A GRIDDD</label>
                <label>HELLO, THIS IS A GRIDDD</label>
              </div>
              <div className="bottom">
                <div className="block">
                  <label>BEHANCE</label>
                  <label>DRIBBBLE</label>
                  <label>INSTAGRAM</label>
                </div>
                <div className="block">
                  <label>EMAIL</label>
                  <label>TELEGRAM</label>
                </div>
              </div>
            </div>
            <div className="time-and-date">
              <div>{currentDate()}</div>
              <div>{currentTime()}</div>
            </div>
            <style jsx>
              {`
                .content {
                  height: fit-content;
                  width: 100%;
                  max-width: 640px;
                  background-image: radial-gradient(
                      at 27% 37%,
                      hsla(215, 98%, 61%, 1) 0px,
                      transparent 0%
                    ),
                    radial-gradient(
                      at 97% 21%,
                      hsla(125, 98%, 72%, 1) 0px,
                      transparent 80%
                    ),
                    radial-gradient(
                      at 52% 99%,
                      hsla(354, 98%, 61%, 1) 0px,
                      transparent 80%
                    ),
                    radial-gradient(
                      at 10% 29%,
                      hsla(256, 96%, 67%, 1) 0px,
                      transparent 80%
                    ),
                    radial-gradient(
                      at 97% 96%,
                      hsla(38, 60%, 74%, 1) 0px,
                      transparent 80%
                    ),
                    radial-gradient(
                      at 33% 50%,
                      hsla(222, 67%, 73%, 1) 0px,
                      transparent 80%
                    ),
                    radial-gradient(
                      at 79% 53%,
                      hsla(343, 68%, 79%, 1) 0px,
                      transparent 80%
                    );
                  position: absolute;
                  content: "";
                  width: 100%;
                  height: 100%;
                  filter: blur(100px) saturate(150%);
                  top: 80px;
                  opacity: 0.35;
                }
                .main-box {
                  width: 100%;
                  height: 100%;
                  color: #000;
                  position: absolute;
                  height: 50%;
                  bottom: 0px;
                  left: 0px;
                  display: flex;
                  flex-direction: column;
                  text-align: left;
                  font-size: 32px;
                  padding: 0px 20px;
                }
                .main-box .top {
                  display: flex;
                  flex-direction: column;
                }
                .main-box .bottom {
                  display: flex;
                  flex-direction: row;
                  font-size: 15px;
                  margin-top: 30px;
                }
                .main-box .bottom .block {
                  width: 150px;
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                .time-and-date {
                  color: #000;
                  margin: 20px;
                  position: absolute;
                  right: 0px;
                  width: fit-content;
                  display: flex;
                  flex-direction: column;
                  justify-content: end;
                  text-align: right;
                }
                .time-and-date div {
                  width: fit-content;
                }
                .time-and-date div:last-child {
                  font-size: 20px;
                }
              `}
            </style>
          </>
        ),
      },
      {
        width: "30%",
        height: "100%",
        flexDirection: "column",
        layout: [
          {
            width: "calc(100% - 2px)",
            height: "calc(50% - 2px)",
            content: <ShapeSpace />,
          },
          {
            width: "calc(100% - 2px)",
            height: "calc(20% - 2px)",
            content: (
              <>
                <div className="mirror">
                  <label>ASYMMETRIC</label>
                </div>
                <style jsx>
                  {`
                    .mirror {
                      color: #000;
                      width: 100%;
                      font-size: 30px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      position: relative;
                    }
                    label {
                      width: fit-content;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      position: relative;
                      cursor: pointer;
                    }
                    label:after {
                      content: "";
                      position: absolute;
                      width: 100%;
                      height: 5px;
                      background: #fff;
                      bottom: 0px;
                      transition: all 200ms;
                      mix-blend-mode: difference;
                    }
                    label:hover:after {
                      height: 35px;
                      bottom: 0px;
                    }
                  `}
                </style>
              </>
            ),
          },
          {
            width: "calc(100% - 2px)",
            height: "calc(30% - 2px)",
            content: <CubeSpace />,
          },
        ],
      },
      {
        width: "20%",
        height: "100%",
        flexDirection: "column",
        layout: [
          {
            width: "100%",
            height: "50px",
            layout: [
              {
                width: "calc(100% - 50px - 2px)",
                height: "calc(100% - 2px)",
                content: (
                  <>
                    <div className="mirror">
                      <label>ONLINE</label>
                    </div>
                    <style jsx>
                      {`
                        .mirror {
                          color: #000;
                          width: 100%;
                          font-size: 20px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          position: relative;
                        }
                        label {
                          width: fit-content;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          position: relative;
                          cursor: pointer;
                        }
                        label:after {
                          content: "";
                          position: absolute;
                          width: 100%;
                          height: 5px;
                          background: #fff;
                          bottom: 0px;
                          transition: all 200ms;
                          mix-blend-mode: difference;
                        }
                        label:hover:after {
                          height: 26px;
                          bottom: 0px;
                        }
                      `}
                    </style>
                  </>
                ),
              },
              {
                width: "calc(50px - 2px)",
                height: "calc(100% - 2px)",
                borderRadius: "50px",
                background: "#0f9",
                content: (
                  <>
                    <div className="plus-icon">+</div>
                    <style jsx>
                      {`
                        .plus-icon {
                          width: 100%;
                          color: #000;
                          font-weight: 100;
                          font-size: 40px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          align-content: center;
                          transition: all 300ms;
                        }
                        .plus-icon div {
                          width: 100%;
                          height: 100%;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        }
                        .plus-icon:hover {
                          transform: rotate(180deg);
                        }
                      `}
                    </style>
                  </>
                ),
              },
            ],
          },
          {
            width: "calc(100% - 2px)",
            height: "calc(50% - 50px - 2px)",
            content: <CylinderSpace />,
          },
          {
            width: "calc(100% - 2px)",
            height: "calc(50% - 2px)",
            content: <SimilarCylinderSpace />,
          },
        ],
      },
    ],
  },
  {
    width: "100%",
    height: "30%",
    layout: [
      {
        width: "calc(20% - 2px)",
        height: "calc(100% - 2px)",
        content: <RingShape />,
      },
      {
        width: "calc(40% - 2px)",
        height: "calc(100% - 2px)",
        content: <WeirdCylinderShape />,
      },
      {
        width: "calc(40% - 2px)",
        height: "calc(100% - 2px)",
        content: <HorizontalCylinderSpace />,
      },
    ],
  },
];
