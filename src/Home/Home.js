import React from 'react'
import './Home.css'
import { BsGlobe, BsPenFill, BsPlus} from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { GoChevronDown } from "react-icons/go";
import { VscVm } from "react-icons/vsc";
export default function Home() {
  return (
    <div>
      <div className='sidebar-wrapper sidebar w-80 '>
         <ul>
            <li className='flex justify-around items-center'>
               <h4>Typography </h4>

                <div className='flex items-center justify-between 	 m-2'>
                  
                        <label className='p-2 icons'>  <BsGlobe/></label>

                        <div class="dropdown dropdown-end p-2 icons">
                          <label tabindex="0" className=' '><BsPenFill/></label>
                          <ul className="dropdown-content  menu p-1  bg-base-100 shadow-lg  w-64 mt-5">
                            <li>
                              <div className='p-2 flex justify-between'>
                                <h4 className='font-bold	'>Typography</h4>
                                <div className='flex justify-between items-center'>
                                  <BsPlus className='icons text-xl mr-2 '/>
                                  <BiRefresh className='icons text-xl'/>
                                
                                </div>
                              </div>
                            </li>

                            <div className='p-4'>
                              <div className=' flex justify-between items-center mb-5'>
                                  <h4>Family</h4>
                                  <div className='icons flex justify-between items-center w-32'>
                                    <h4 className='mr-2 px-1'> Roboto</h4>
                                    <GoChevronDown className='mr-2 '/>
                                
                                  </div>
                              </div>

                              <div className='flex justify-between items-center  mb-5'>
                                <div className='flex justify-between items-center'>
                                  <h4 className='mr-2'>Size</h4>
                                  <VscVm/>
                                </div>
                                <div>
                                  <div className='flex justify-between items-center text-xs'>
                                    <p className='mr-2'>px</p>
                                    <GoChevronDown />
                                  </div>
                                </div>

                              </div>


                              <div className='mb-5'>
                               <input type="range" min="0" max="100" value="30" class="range range-xs" /> 
                              </div>

                              <div className=' flex justify-between items-center mb-5'>
                                  <h4>Weight</h4>
                                  <div className='icons flex justify-between items-center w-32'>
                                    <h4 className='mr-2 px-1'> 600(Bold)</h4>
                                    <GoChevronDown className='mr-2 '/>
                                
                                  </div>
                              </div>
                              <div className=' flex justify-between items-center mb-5'>
                                  <h4>Trasform</h4>
                                  <div className='icons flex justify-between items-center w-32'>
                                    <h4 className='mr-2 px-1'> Default</h4>
                                    <GoChevronDown className='mr-2 '/>
                                
                                  </div>
                              </div>
                              <div className=' flex justify-between items-center mb-5'>
                                  <h4>Style</h4>
                                  <div className='icons flex justify-between items-center w-32'>
                                    <h4 className='mr-2 px-1'> Default</h4>
                                    <GoChevronDown className='mr-2 '/>
                                
                                  </div>
                              </div>
                              <div className=' flex justify-between items-center mb-5'>
                                  <h4>Decoration</h4>
                                  <div className='icons flex justify-between items-center w-32'>
                                    <h4 className='mr-2 px-1'> Default</h4>
                                    <GoChevronDown className='mr-2 '/>
                                
                                  </div>
                              </div>

                              <div className='flex justify-between items-center  mb-5'>
                                <div className='flex justify-between items-center'>
                                  <h4 className='mr-2'>Line Height</h4>
                                  <VscVm/>
                                </div>
                                <div>
                                  <div className='flex justify-between items-center text-xs'>
                                    <p className='mr-2'>px</p>
                                    <GoChevronDown />
                                  </div>
                                </div>

                              </div>


                              <div className='mb-5'>
                               <input type="range" min="0" max="100" value="30" class="range range-xs" /> 
                              </div>

                              <div className='flex justify-between items-center  mb-5'>
                                <div className='flex justify-between items-center'>
                                  <h4 className='mr-2'>Letter Speacing</h4>
                                  <VscVm/>
                                </div>
                                <div>
                                  <div className='flex justify-between items-center text-xs'>
                                    <p className='mr-2'>px</p>
                                    <GoChevronDown />
                                  </div>
                                </div>

                              </div>


                              <div className='mb-5'>
                               <input type="range" min="0" max="100" value="30" class="range range-xs" /> 
                              </div>

                              <div className='flex justify-between items-center  mb-5'>
                                <div className='flex justify-between items-center'>
                                  <h4 className='mr-2'>Word Speacing</h4>
                                  <VscVm/>
                                </div>
                                <div>
                                  <div className='flex justify-between items-center text-xs'>
                                    <p className='mr-2'>px</p>
                                    <GoChevronDown />
                                  </div>
                                </div>

                              </div>


                              <div className='mb-5'>
                               <input type="range" min="0" max="100" value="30" class="range range-xs" /> 
                              </div>

                            </div>

                            




                          </ul>
                        </div>
                   
                  
                </div>  
            </li>
          </ul>
          
      </div>



      <div className='main-content w-3/4'>
         <h1 className='text-4xl text-center'>ghdghhhhhhhhhh </h1>
      </div>
        
    </div>
    
  )
}
