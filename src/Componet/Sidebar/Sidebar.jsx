import React from 'react'

function Sidebar({child}) {
  return (
    <div>
      {/* <div class="lg:flex lg:h-full lg:flex-col">
  <header class="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
    <h1 class="text-base font-semibold leading-6 text-gray-900">
      <time datetime="2022-01">January 2022</time>
    </h1>
    <div class="flex items-center">
      <div class="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
        <button type="button" class="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50">
          <span class="sr-only">Previous month</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
        </button>
        <button type="button" class="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block">Today</button>
        <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
        <button type="button" class="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50">
          <span class="sr-only">Next month</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="hidden md:ml-4 md:flex md:items-center">
        <div class="relative">
          <button type="button" class="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
            Month view
            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>

         
          <div class="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
              
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Day view</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Week view</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Month view</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Year view</a>
            </div>
          </div>
        </div>
        <div class="ml-6 h-6 w-px bg-gray-300"></div>
        <button type="button" class="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Add event</button>
      </div>
      <div class="relative ml-6 md:hidden">
        <button type="button" class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500" id="menu-0-button" aria-expanded="false" aria-haspopup="true">
          <span class="sr-only">Open menu</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
          </svg>
        </button>

       
        <div class="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
          <div class="py-1" role="none">
            
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0">Create event</a>
          </div>
          <div class="py-1" role="none">
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1">Go to today</a>
          </div>
          <div class="py-1" role="none">
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-2">Day view</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-3">Week view</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-4">Month view</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-5">Year view</a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
    <div class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
      <div class="flex justify-center bg-white py-2">
        <span>M</span>
        <span class="sr-only sm:not-sr-only">on</span>
      </div>
      <div class="flex justify-center bg-white py-2">
        <span>T</span>
        <span class="sr-only sm:not-sr-only">ue</span>
      </div>
      <div class="flex justify-center bg-white py-2">
        <span>W</span>
        <span class="sr-only sm:not-sr-only">ed</span>
      </div>
      <div class="flex justify-center bg-white py-2">
        <span>T</span>
        <span class="sr-only sm:not-sr-only">hu</span>
      </div>
      <div class="flex justify-center bg-white py-2">
        <span>F</span>
        <span class="sr-only sm:not-sr-only">ri</span>
      </div>
      <div class="flex justify-center bg-white py-2">
        <span>S</span>
        <span class="sr-only sm:not-sr-only">at</span>
      </div>
      <div class="flex justify-center bg-white py-2">
        <span>S</span>
        <span class="sr-only sm:not-sr-only">un</span>
      </div>
    </div>
    <div class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
      <div class="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
        
        <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
          
          <time datetime="2021-12-27">27</time>
        </div>
        <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
          <time datetime="2021-12-28">28</time>
        </div>
        <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
          <time datetime="2021-12-29">29</time>
        </div>
        <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
          <time datetime="2021-12-30">30</time>
        </div>
        <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
          <time datetime="2021-12-31">31</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-01">1</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-01">2</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-03">3</time>
          <ol class="mt-2">
            <li>
              <a href="#" class="group flex">
                <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Design review</p>
                <time datetime="2022-01-03T10:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">10AM</time>
              </a>
            </li>
            <li>
              <a href="#" class="group flex">
                <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Sales meeting</p>
                <time datetime="2022-01-03T14:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">2PM</time>
              </a>
            </li>
          </ol>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-04">4</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-05">5</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-06">6</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-07">7</time>
          <ol class="mt-2">
            <li>
              <a href="#" class="group flex">
                <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Date night</p>
                <time datetime="2022-01-08T18:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">6PM</time>
              </a>
            </li>
          </ol>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-08">8</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-09">9</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-10">10</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-11">11</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-12" class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">12</time>
          <ol class="mt-2">
            <li>
              <a href="#" class="group flex">
                <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Sam's birthday party</p>
                <time datetime="2022-01-25T14:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">2PM</time>
              </a>
            </li>
          </ol>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-13">13</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-14">14</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-15">15</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-16">16</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-17">17</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-18">18</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-19">19</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-20">20</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-21">21</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-22">22</time>
          <ol class="mt-2">
            <li>
              <a href="#" class="group flex">
                <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Maple syrup museum</p>
                <time datetime="2022-01-22T15:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">3PM</time>
              </a>
            </li>
            <li>
              <a href="#" class="group flex">
                <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Hockey game</p>
                <time datetime="2022-01-22T19:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">7PM</time>
              </a>
            </li>
          </ol>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-23">23</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-24">24</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-25">25</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-26">26</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-27">27</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-28">28</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-29">29</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-30">30</time>
        </div>
        <div class="relative bg-white px-3 py-2">
          <time datetime="2022-01-31">31</time>
        </div>
        <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
          <time datetime="2022-02-01">1</time>
        </div>
        <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
          <time datetime="2022-02-02">2</time>
        </div>
        <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
          <time datetime="2022-02-03">3</time>
        </div>
        <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
          <time datetime="2022-02-04">4</time>
          <ol class="mt-2">
            <li>
              <a href="#" class="group flex">
                <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Cinema with friends</p>
                <time datetime="2022-02-04T21:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">9PM</time>
              </a>
            </li>
          </ol>
        </div>
        <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
          <time datetime="2022-02-05">5</time>
        </div>
        <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
          <time datetime="2022-02-06">6</time>
        </div>
      </div>
      <div class="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
        
        <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
      
          <time datetime="2021-12-27" class="ml-auto">27</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
          <time datetime="2021-12-28" class="ml-auto">28</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
          <time datetime="2021-12-29" class="ml-auto">29</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
          <time datetime="2021-12-30" class="ml-auto">30</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
          <time datetime="2021-12-31" class="ml-auto">31</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-01" class="ml-auto">1</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-02" class="ml-auto">2</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-03" class="ml-auto">3</time>
          <span class="sr-only">2 events</span>
          <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
            <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
            <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
          </span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-04" class="ml-auto">4</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-05" class="ml-auto">5</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-06" class="ml-auto">6</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-07" class="ml-auto">7</time>
          <span class="sr-only">1 event</span>
          <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
            <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
          </span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-08" class="ml-auto">8</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-09" class="ml-auto">9</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-10" class="ml-auto">10</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-11" class="ml-auto">11</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-12" class="ml-auto">12</time>
          <span class="sr-only">1 event</span>
          <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
            <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
          </span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-13" class="ml-auto">13</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-14" class="ml-auto">14</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-15" class="ml-auto">15</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-16" class="ml-auto">16</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-17" class="ml-auto">17</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-18" class="ml-auto">18</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-19" class="ml-auto">19</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-20" class="ml-auto">20</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-21" class="ml-auto">21</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 font-semibold text-white hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-22" class="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-gray-900">22</time>
          <span class="sr-only">2 events</span>
          <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
            <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
            <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
          </span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-23" class="ml-auto">23</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-24" class="ml-auto">24</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-25" class="ml-auto">25</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-26" class="ml-auto">26</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-27" class="ml-auto">27</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-28" class="ml-auto">28</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-29" class="ml-auto">29</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-30" class="ml-auto">30</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-01-31" class="ml-auto">31</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-02-01" class="ml-auto">1</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-02-02" class="ml-auto">2</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-02-03" class="ml-auto">3</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-02-04" class="ml-auto">4</time>
          <span class="sr-only">1 event</span>
          <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
            <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
          </span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-02-05" class="ml-auto">5</time>
          <span class="sr-only">0 events</span>
        </button>
        <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
          <time datetime="2022-02-06" class="ml-auto">6</time>
          <span class="sr-only">0 events</span>
        </button>
      </div>
    </div>
  </div>
</div> */}
      <section class="relative bg-stone-50">
        <div class="bg-sky-400 w-full sm:w-40 h-40 rounded-full absolute top-1 opacity-20 max-sm:right-0 sm:left-56 z-0"></div>
        <div class="bg-emerald-500 w-full sm:w-40 h-24 absolute top-0 -left-0 opacity-20 z-0"></div>
        <div class="bg-purple-600 w-full sm:w-40 h-24 absolute top-40 -left-0 opacity-20 z-0"></div>
        <div class="w-full py-24 relative z-10 backdrop-blur-3xl">
          <div class="w-full max-w-7xl mx-auto px-2 lg:px-8">
            <div class="grid gap-8 ">
              
              <div class="col-span-12 xl:col-span-7 px-2.5 py-5 sm:p-8 bg-gradient-to-b from-white/25 to-white xl:bg-white rounded-2xl max-xl:row-start-1">
                <div class="flex flex-col md:flex-row gap-4 items-center justify-between mb-5">
                  <div class="flex items-center gap-4">
                    <h5 class="text-xl leading-8 font-semibold text-gray-900">
                      January 2024
                    </h5>
                    <div class="flex items-center">
                      <button class="text-indigo-600 p-1 rounded transition-all duration-300 hover:text-white hover:bg-indigo-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                            stroke="currentcolor"
                            stroke-width="1.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <button class="text-indigo-600 p-1 rounded transition-all duration-300 hover:text-white hover:bg-indigo-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6.00236 3.99707L10.0025 7.99723L6 11.9998"
                            stroke="currentcolor"
                            stroke-width="1.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="flex items-center rounded-md p-1 bg-indigo-50 gap-px">
                    <button class="py-2.5 px-5 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-medium transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                      Day
                    </button>
                    <button class="py-2.5 px-5 rounded-lg bg-indigo-600 text-white text-sm font-medium transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                      Week
                    </button>
                    <button class="py-2.5 px-5 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-medium transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                      Month
                    </button>
                  </div>
                </div>
                <div class="border border-indigo-200 rounded-xl">
                  <div class="grid grid-cols-7 rounded-t-3xl border-b border-indigo-200">
                    <div class="py-3.5 border-r rounded-tl-xl border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Sun
                    </div>
                    <div class="py-3.5 border-r border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Mon
                    </div>
                    <div class="py-3.5 border-r border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Tue
                    </div>
                    <div class="py-3.5 border-r border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Wed
                    </div>
                    <div class="py-3.5 border-r border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Thu
                    </div>
                    <div class="py-3.5 border-r border-indigo-200 bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Fri
                    </div>
                    <div class="py-3.5 rounded-tr-xl bg-indigo-50 flex items-center justify-center text-sm font-medium text-indigo-600">
                      Sat
                    </div>
                  </div>
                  <div class="grid grid-cols-7 rounded-b-xl">
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50">
                      <span class="text-xs font-semibold text-gray-400">
                        27
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-400">
                        28
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-400">
                        29
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-400">
                        30
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-400">
                        31
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">1</span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">2</span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 relative bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">3</span>
                      <div class="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-purple-50 ">
                        <p class="hidden xl:block text-xs font-medium text-purple-600 mb-px">
                          Meeting
                        </p>
                        <span class="hidden xl:block text-xs font-normal text-purple-600 whitespace-nowrap">
                          10:00 - 11:00
                        </span>
                        <p class="xl:hidden w-2 h-2 rounded-full bg-purple-600"></p>
                      </div>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">4</span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">5</span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">6</span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white relative border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">7</span>
                      <div class="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-emerald-50 ">
                        <p class="hidden xl:block text-xs font-medium text-emerald-600 mb-px whitespace-nowrap">
                          Developer Meetup
                        </p>
                        <span class="hidden xl:block text-xs font-normal text-emerald-600 whitespace-nowrap">
                          10:00 - 11:00
                        </span>
                        <p class="xl:hidden w-2 h-2 rounded-full bg-emerald-600"></p>
                      </div>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">8</span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-indigo-600 sm:text-white sm:w-6 sm:h-6 rounded-full sm:flex items-center justify-center sm:bg-indigo-600">
                        9
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        10
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        11
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        12
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        13
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        14
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        15
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        16
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        17
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        18
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 relative bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        19
                      </span>
                      <div class="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-sky-50 ">
                        <p class="hidden xl:block text-xs font-medium text-sky-600 mb-px whitespace-nowrap">
                          Developer Meetup
                        </p>
                        <span class="hidden xl:block text-xs font-normal text-sky-600 whitespace-nowrap">
                          10:00 - 11:00
                        </span>
                        <p class="xl:hidden w-2 h-2 rounded-full bg-sky-600"></p>
                      </div>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        20
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        21
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        22
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        23
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        24
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        25
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        26
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        27
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        28
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        29
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        30
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-indigo-200 rounded-bl-xl transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-900">
                        31
                      </span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-400">1</span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-400">2</span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-400">3</span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 relative bg-gray-50 border-r border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-400">4</span>
                      <div class="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-purple-50 ">
                        <p class="hidden xl:block text-xs font-medium text-purple-600 mb-px whitespace-nowrap">
                          Friends Meet
                        </p>
                        <span class="hidden xl:block text-xs font-normal text-purple-600 whitespace-nowrap">
                          09:00 - 13:42
                        </span>
                        <p class="xl:hidden w-2 h-2 rounded-full bg-purple-600"></p>
                      </div>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-indigo-200 transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-400">5</span>
                    </div>
                    <div class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-indigo-200 rounded-br-xl transition-all duration-300 hover:bg-indigo-50 cursor-pointer">
                      <span class="text-xs font-semibold text-gray-400">6</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sidebar