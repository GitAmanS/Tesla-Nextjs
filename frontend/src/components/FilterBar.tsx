'use client';
import React, { useState, useEffect, useRef } from 'react';

const FilterBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedOption, setSelectedOption] = useState('All-time');

  const [activeDropdownPeople, setActiveDropdownPeople] = useState(null);
  const [selectedOptionPeople, setSelectedOptionPeople] = useState('All');

  const [activeDropdownTopic, setActiveDropdownTopic] = useState(null);
  const [selectedOptionTopic, setSelectedOptionTopic] = useState('All');

  const dropdownRef = useRef(null);
  const buttonRefs = useRef([]);

  const dropdownRefPeople = useRef(null);
  const buttonRefsPeople = useRef([]);

  const dropdownRefTopic = useRef(null);
  const buttonRefsTopic = useRef([]);
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };


  const toggleDropdownPeople = (index) => {
    setActiveDropdownPeople(activeDropdownPeople === index ? null : index);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ensure refs are initialized and dropdownRef/buttonRefs are not null
      if (
        (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        !buttonRefs.current.some((btn) => btn && btn.contains(event.target))) ||
        (dropdownRefPeople.current && !dropdownRefPeople.current.contains(event.target) &&
        !buttonRefsPeople.current.some((btn) => btn && btn.contains(event.target)))
      ) {
        setActiveDropdown(null);
        setActiveDropdownPeople(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex flex-row gap-3 py-6">
      <div className="relative w-full">
        <button
          ref={(el) => (buttonRefs.current[0] = el)}
          className="flex bg-[#FFFFFF] border border-[#EFF0F6] w-full px-4 rounded-[20px] z-10"
          onClick={() => toggleDropdown(0)}
        >
          <p className="font-inter text-[16px] font-[500] py-3">
            <span className="text-[#000000B2] mr-1">Timeframe:</span>
            <span className="text-[#1A1A21]">{selectedOption}</span>
          </p>
        </button>
        {activeDropdown === 0 && (
          <div
            ref={dropdownRef}
            className={`absolute top-0 px-4 left-0 w-full bg-white border border-[#EFF0F6] shadow-lg rounded-[20px] z-20 mt-[0px]   transition-all duration-1000 ease-in-out opacity-100 scale-y-100`}
          >
            <p className="font-inter text-[16px] font-[500] py-3">
              <span className="text-[#000000B2] mr-1">Timeframe:</span>
              <span className="text-[#1A1A21]">{selectedOption}</span>
            </p>
            <ul className='text-[14px] mb-3'>
              <li
                onClick={() => handleOptionClick('Last 7 Days')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOption === 'Last 7 Days' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                Last 7 Days
              </li>
              <li
                onClick={() => handleOptionClick('This Month')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOption === 'This Month' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                This Month
              </li>
              <li
                onClick={() => handleOptionClick('This Year')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOption === 'This Year' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                This Year
              </li>
              <li
                onClick={() => handleOptionClick('Custom')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOption === 'Custom' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                Custom
              </li>
            </ul>
          </div>
        )}
      </div>



      {/* People */}
      <div className="relative w-full">
        <button
          ref={(el) => (buttonRefsPeople.current[0] = el)}
          className="flex bg-[#FFFFFF] border border-[#EFF0F6] w-full px-4 rounded-[20px] z-10"
          onClick={() => toggleDropdownPeople(0)}
        >
          <p className="font-inter text-[16px] font-[500] py-3">
            <span className="text-[#000000B2] mr-1">People:</span>
            <span className="text-[#1A1A21]">{selectedOptionPeople}</span>
          </p>
        </button>
        {activeDropdownPeople === 0 && (
          <div
            ref={dropdownRefPeople}
            className={`absolute flex flex-col top-0 px-4 left-0 w-full bg-white border border-[#EFF0F6] shadow-lg rounded-[20px] z-20 mt-[0px] transition-transform duration-300 ease-in-out opacity-100 scale-y-100`}
          >
            <p className="flex font-inter text-[16px] font-[500] py-3">
              <span className="text-[#000000B2] mr-1">People:</span>
              <span className="text-[#1A1A21]">{selectedOptionPeople}</span>

              <span className='text-[14px] font-[500] text-[#000000B2] ml-auto '>clear</span>
            </p>


            <ul className='text-[14px] mb-3'>
              <li
                onClick={() => handleOptionClick('Last 7 Days')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOptionPeople === 'Last 7 Days' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                Last 7 Days
              </li>
              <li
                onClick={() => handleOptionClick('This Month')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOptionPeople === 'This Month' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                This Month
              </li>
              <li
                onClick={() => handleOptionClick('This Year')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOptionPeople === 'This Year' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                This Year
              </li>
              <li
                onClick={() => handleOptionClick('Custom')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOption === 'Custom' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                Custom
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Topic */}
      <div className="relative w-full">
        <button
          ref={(el) => (buttonRefs.current[0] = el)}
          className="flex bg-[#FFFFFF] border border-[#EFF0F6] w-full px-4 rounded-[20px] z-10"
          onClick={() => toggleDropdown(0)}
        >
          <p className="font-inter text-[16px] font-[500] py-3">
            <span className="text-[#000000B2] mr-1">Topic:</span>
            <span className="text-[#1A1A21]">{selectedOption}</span>
          </p>
        </button>
        {activeDropdown === 0 && (
          <div
            ref={dropdownRef}
            className={`absolute top-0 px-4 left-0 w-full bg-white border border-[#EFF0F6] shadow-lg rounded-[20px] z-20 mt-[0px] transition-transform duration-300 ease-in-out opacity-100 scale-y-100`}
          >
            <p className="font-inter text-[16px] font-[500] py-3">
              <span className="text-[#000000B2] mr-1">Timeframe:</span>
              <span className="text-[#1A1A21]">{selectedOption}</span>
            </p>
            <ul className='text-[14px] mb-3'>
              <li
                onClick={() => handleOptionClick('Last 7 Days')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOption === 'Last 7 Days' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                Last 7 Days
              </li>
              <li
                onClick={() => handleOptionClick('This Month')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOption === 'This Month' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                This Month
              </li>
              <li
                onClick={() => handleOptionClick('This Year')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOption === 'This Year' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                This Year
              </li>
              <li
                onClick={() => handleOptionClick('Custom')}
                className={`py-2 px-3 my-1 text-[14px] rounded-[11px] cursor-pointer ${selectedOption === 'Custom' ? 'bg-[#F2F7FF] font-[600]' : 'hover:bg-gray-100'}`}
              >
                Custom
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
