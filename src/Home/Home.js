import React, { useState } from "react";
import "./Home.css";
import { BsGlobe, BsPenFill, BsPlus } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { GoChevronDown } from "react-icons/go";
import { VscVm } from "react-icons/vsc";

export default function Home() {
  // initial state
  const [style, setStyle] = useState({
    fontFamily: "roboto",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    lineHeight: 0,
    letterSpacing: 0,
    wordSpacing: 0,
  });

  // update style method
  const updateStyle = (styleName, styleValue) =>
    setStyle((prevStyle) => ({ ...prevStyle, [styleName]: styleValue }));

  return (
    <div className="flex h-screen">
      <div className="sidebar-wrapper sidebar w-1/4 flex-shrink-">
        <ul>
          <li className="flex justify-around items-center">
            <h4>Typography </h4>

            <div className="flex items-center justify-between m-2">
              <label className="p-2 icons">
                {" "}
                <BsGlobe />
              </label>

              <div class="dropdown dropdown-end p-2 icons">
                <label tabindex="0" className=" ">
                  <BsPenFill />
                </label>
                <ul className="dropdown-content  menu p-1  bg-base-100 shadow-lg  w-64 mt-5">
                  <li>
                    <div className="p-2 flex justify-between">
                      <h4 className="font-bold	">Typography</h4>
                      <div className="flex justify-between items-center">
                        <BsPlus className="icons text-xl mr-2 " />
                        <BiRefresh className="icons text-xl" />
                      </div>
                    </div>
                  </li>

                  <div className="p-4">
                    <div className=" flex justify-between items-center mb-5">
                      <h4>Family</h4>
                      <div className="icons flex justify-between items-center w-32">
                        <select
                          onChange={(e) =>
                            updateStyle("fontFamily", `${e.target.value}`)
                          }
                        >
                          <option value="roboto">Roboto</option>
                          <option value="arial">Arial</option>
                          <option value="Times New Roman, Times, serif">
                            Times New Roman
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between items-center  mb-5">
                      <div className="flex justify-between items-center">
                        <h4 className="mr-2">Size</h4>
                        <VscVm />
                      </div>
                      <div>
                        <div className="flex justify-between items-center text-xs">
                          <p className="mr-2">px</p>
                          <GoChevronDown />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 flex justify-between items-center">
                      <div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={style["fontSize"]}
                          className="range range-xs"
                          onChange={(e) =>
                            updateStyle("fontSize", parseInt(e.target.value))
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          className="custom_input py-5 px-2"
                          onChange={(e) =>
                            updateStyle("fontSize", parseInt(e.target.value))
                          }
                        />
                      </div>
                    </div>

                    <div className=" flex justify-between items-center mb-5">
                      <h4>Weight</h4>
                      <div className="icons flex justify-between items-center">
                        <select
                          onChange={(e) =>
                            updateStyle("fontWeight", `${e.target.value}`)
                          }
                        >
                          <option value="500">500 (Normal)</option>
                          <option value="600">600 (Semi Bold)</option>
                          <option value="800">800 (Bold)</option>
                        </select>
                      </div>
                    </div>
                    <div className=" flex justify-between items-center mb-5">
                      <h4>Transform</h4>
                      <div className="icons flex justify-between items-center">
                        <select
                          onChange={(e) =>
                            updateStyle("textTransform", `${e.target.value}`)
                          }
                        >
                          <option value="normal">Normal</option>
                          <option value="uppercase">Uppercase</option>
                          <option value="lowercase">Lowercase</option>
                        </select>
                      </div>
                    </div>
                    <div className=" flex justify-between items-center mb-5">
                      <h4>Style</h4>
                      <select
                        onChange={(e) =>
                          updateStyle("fontStyle", `${e.target.value}`)
                        }
                      >
                        <option value="normal">Normal</option>
                        <option value="italic">Italic</option>
                      </select>
                    </div>
                    <div className=" flex justify-between items-center mb-5">
                      <h4>Decoration</h4>
                      <div className="icons flex justify-between items-center ">
                        <select
                          onChange={(e) =>
                            updateStyle("textDecoration", `${e.target.value}`)
                          }
                        >
                          <option value="none">None</option>
                          <option value="underline">Underline</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between items-center  mb-5">
                      <div className="flex justify-between items-center">
                        <h4 className="mr-2">Line Height</h4>
                        <VscVm />
                      </div>
                      <div>
                        <div className="flex justify-between items-center text-xs">
                          <p className="mr-2">px</p>
                          <GoChevronDown />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 flex justify-between items-center">
                      <div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={style["lineHeight"]}
                          className="range range-xs"
                          onChange={(e) =>
                            updateStyle("lineHeight", parseInt(e.target.value))
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          className="custom_input py-5 px-2"
                          onChange={(e) =>
                            updateStyle("lineHeight", parseInt(e.target.value))
                          }
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center  mb-5">
                      <div className="flex justify-between items-center">
                        <h4 className="mr-2">Letter Speacing</h4>
                        <VscVm />
                      </div>
                      <div>
                        <div className="flex justify-between items-center text-xs">
                          <p className="mr-2">px</p>
                          <GoChevronDown />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 flex justify-between items-center">
                      <div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={style["letterSpacing"]}
                          className="range range-xs"
                          onChange={(e) =>
                            updateStyle(
                              "letterSpacing",
                              parseInt(e.target.value)
                            )
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          className="custom_input py-5 px-2"
                          onChange={(e) =>
                            updateStyle(
                              "letterSpacing",
                              parseInt(e.target.value)
                            )
                          }
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center  mb-5">
                      <div className="flex justify-between items-center">
                        <h4 className="mr-2">Word Speacing</h4>
                        <VscVm />
                      </div>
                      <div>
                        <div className="flex justify-between items-center text-xs">
                          <p className="mr-2">px</p>
                          <GoChevronDown />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 flex justify-between items-center">
                      <div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={style["wordSpacing"]}
                          className="range range-xs"
                          onChange={(e) =>
                            updateStyle("wordSpacing", parseInt(e.target.value))
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          className="custom_input py-5 px-2"
                          onChange={(e) =>
                            updateStyle("wordSpacing", parseInt(e.target.value))
                          }
                        />
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* className="text-4xl text-center" */}
      <div className="main-content w-3/4 overflow-y-auto p-4 mt-10">
        <h1 style={style}>This is a system generated text. </h1>
      </div>
    </div>
  );
}
