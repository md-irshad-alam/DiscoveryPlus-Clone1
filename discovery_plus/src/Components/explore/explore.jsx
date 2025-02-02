
import React from "react";

import AnE from "./Images/a&e_explore.png"
import All_exp from "./Images/all_explore.png";
import Animal from "./Images/animal_explore.png";
import Bbc from "./Images/bbc_explore.png";
import Discov from "./Images/disco_explore.png";
import Dmax from "./Images/Dmax_explore.png";
import Euro from "./Images/euro_explore.jpg";
import Food from "./Images/food_explore.jpg";
import Invest from "./Images/invest_explore.png";
import Kid from "./Images/kid_explore.png";
import Mind from "./Images/mind_explore.jpg";
import Sci from "./Images/sci_explore.png";
import Tlc from "./Images/tlc_explore.png";
import Trvl from "./Images/trvl_explore.png";
import Turbo from "./Images/turbo_explore.jpg";
import "./CSS/explore.css"
import { Link } from "react-router-dom";
import Short from "../shorts/short";




export const Explore=()=>{

    return <>
   <div id="main"  >

     {/* <div id="app" className="appStyle"> */}
         <div style={{padding: "4%",  }}>
         <div id="exploreHeader">
             <h6 className="heading">Live Channels</h6>
         </div>
         <div className="live-grid">
          <a className="live_blks" href="https://www.discoveryplus.in/channel/discovery-channel?liveStream=true">
             <div className="subboxes">
                <div className="img_contain" style={{ backgroundImage:`url(${Sci})` }}>
               <div className="img_details">
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 64 23" className="live_style"><defs>
                     <filter id="bidwahrx2a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.129412 0 0 0 1.000000 0"></feColorMatrix></filter>
                     </defs><g fill="none" fill-rule="evenodd"><g><g transform="translate(-443 -154) translate(443 154)">
                         <rect width="63.588" height="23" fill="#78C54A" fill-rule="nonzero" rx="2.1"></rect><g>
                             <g filter="url(#bidwahrx2a)" transform="translate(8.542 6.024)"><g fill="#2789FF">
                                 <path d="M1.724 0c-.145-.004-.28.065-.364.184C.476 1.385 0 2.842 0 4.34c0 1.497.48 2.955 1.364 4.157.067.096.17.16.284.177.115.02.232-.01.325-.08.094-.07.155-.176.17-.293.016-.115-.016-.233-.088-.325C1.281 6.922.865 5.649.865 4.339S1.28 1.753 2.055.7c.099-.13.117-.304.047-.452-.07-.148-.216-.245-.378-.248zM12.067 0c-.158.01-.3.108-.366.254-.067.148-.048.32.05.448.774 1.051 1.191 2.326 1.191 3.637 0 1.31-.42 2.584-1.195 3.636-.068.093-.097.209-.08.324.016.115.077.217.17.287.091.07.206.099.32.082.114-.017.217-.078.285-.171.884-1.203 1.363-2.661 1.363-4.158 0-1.497-.479-2.954-1.363-4.155-.077-.11-.199-.178-.331-.183h-.043z" transform="translate(0 1.294)"></path>
                                 <path d="M3.166 1.284c-.017 0-.034 0-.05.003-.127.015-.24.086-.31.194-.576.84-.885 1.835-.885 2.858 0 1.022.31 2.02.885 2.861.134.198.404.248.6.11.197-.136.246-.408.111-.606-.476-.695-.733-1.52-.733-2.365 0-.846.257-1.669.733-2.363.095-.134.109-.31.034-.456-.073-.146-.222-.237-.385-.236zM10.633 1.287c-.16.002-.305.095-.378.24-.072.144-.059.316.034.448.477.695.73 1.518.73 2.363 0 .847-.253 1.671-.73 2.367-.135.198-.086.47.11.606.197.136.466.087.6-.11.576-.841.883-1.84.883-2.862 0-1.023-.307-2.018-.882-2.858-.082-.124-.22-.197-.367-.194zM5.64 1.582l-.044.001c-.224.019-.395.208-.395.434v4.646c0 .163.09.311.234.387.142.073.315.061.447-.033l3.261-2.32v-.003c.114-.081.181-.213.181-.354s-.068-.273-.18-.356L5.881 1.66c-.072-.05-.155-.077-.242-.077z" transform="translate(0 1.294)"></path>
                                 <path d="M6.064 2.856L8.146 4.339 6.065 5.823 6.065 2.857z" transform="translate(0 1.294)"></path></g></g>
                                 <path fill="#1A1C21" fill-rule="nonzero" d="M27.302 9.31V8.175h-3.675V1.134H22.22V9.31h5.082zm2.808 0V1.134h-1.401V9.31h1.401zm5.516 0l2.914-8.176h-1.546l-2.058 6.395-2.035-6.395h-1.54l2.902 8.176h1.363zm9.364 0V8.175h-3.887V5.66h3.325V4.537h-3.325V2.279h3.848V1.134h-5.255V9.31h5.294z" transform="translate(8.542 6.024)"></path>
                                 </g></g></g></g></svg>
               </div>
              </div>  
                   </div> 
          </a> 
          <a className="live_blks" href="https://www.discoveryplus.in/channel/discovery-channel?liveStream=true">
             <div className="subboxes">
                <div className="img_contain" style={{ backgroundImage:`url(${Discov})` }}>
               <div className="img_details">
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 64 23" className="live_style"><defs>
                     <filter id="bidwahrx2a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.129412 0 0 0 1.000000 0"></feColorMatrix></filter>
                     </defs><g fill="none" fill-rule="evenodd"><g><g transform="translate(-443 -154) translate(443 154)">
                         <rect width="63.588" height="23" fill="#78C54A" fill-rule="nonzero" rx="2.1"></rect><g>
                             <g filter="url(#bidwahrx2a)" transform="translate(8.542 6.024)"><g fill="#2789FF">
                                 <path d="M1.724 0c-.145-.004-.28.065-.364.184C.476 1.385 0 2.842 0 4.34c0 1.497.48 2.955 1.364 4.157.067.096.17.16.284.177.115.02.232-.01.325-.08.094-.07.155-.176.17-.293.016-.115-.016-.233-.088-.325C1.281 6.922.865 5.649.865 4.339S1.28 1.753 2.055.7c.099-.13.117-.304.047-.452-.07-.148-.216-.245-.378-.248zM12.067 0c-.158.01-.3.108-.366.254-.067.148-.048.32.05.448.774 1.051 1.191 2.326 1.191 3.637 0 1.31-.42 2.584-1.195 3.636-.068.093-.097.209-.08.324.016.115.077.217.17.287.091.07.206.099.32.082.114-.017.217-.078.285-.171.884-1.203 1.363-2.661 1.363-4.158 0-1.497-.479-2.954-1.363-4.155-.077-.11-.199-.178-.331-.183h-.043z" transform="translate(0 1.294)"></path>
                                 <path d="M3.166 1.284c-.017 0-.034 0-.05.003-.127.015-.24.086-.31.194-.576.84-.885 1.835-.885 2.858 0 1.022.31 2.02.885 2.861.134.198.404.248.6.11.197-.136.246-.408.111-.606-.476-.695-.733-1.52-.733-2.365 0-.846.257-1.669.733-2.363.095-.134.109-.31.034-.456-.073-.146-.222-.237-.385-.236zM10.633 1.287c-.16.002-.305.095-.378.24-.072.144-.059.316.034.448.477.695.73 1.518.73 2.363 0 .847-.253 1.671-.73 2.367-.135.198-.086.47.11.606.197.136.466.087.6-.11.576-.841.883-1.84.883-2.862 0-1.023-.307-2.018-.882-2.858-.082-.124-.22-.197-.367-.194zM5.64 1.582l-.044.001c-.224.019-.395.208-.395.434v4.646c0 .163.09.311.234.387.142.073.315.061.447-.033l3.261-2.32v-.003c.114-.081.181-.213.181-.354s-.068-.273-.18-.356L5.881 1.66c-.072-.05-.155-.077-.242-.077z" transform="translate(0 1.294)"></path>
                                 <path d="M6.064 2.856L8.146 4.339 6.065 5.823 6.065 2.857z" transform="translate(0 1.294)"></path></g></g>
                                 <path fill="#1A1C21" fill-rule="nonzero" d="M27.302 9.31V8.175h-3.675V1.134H22.22V9.31h5.082zm2.808 0V1.134h-1.401V9.31h1.401zm5.516 0l2.914-8.176h-1.546l-2.058 6.395-2.035-6.395h-1.54l2.902 8.176h1.363zm9.364 0V8.175h-3.887V5.66h3.325V4.537h-3.325V2.279h3.848V1.134h-5.255V9.31h5.294z" transform="translate(8.542 6.024)"></path>
                                 </g></g></g></g></svg>
               </div>
              </div>  
                   </div> 
          </a> 
          <a className="live_blks" href="https://www.discoveryplus.in/channel/discovery-channel?liveStream=true">
             <div className="subboxes">
                <div className="img_contain" style={{ backgroundImage:`url(${Invest})` }}>
               <div className="img_details">
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 64 23" className="live_style"><defs>
                     <filter id="bidwahrx2a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.129412 0 0 0 1.000000 0"></feColorMatrix></filter>
                     </defs><g fill="none" fill-rule="evenodd"><g><g transform="translate(-443 -154) translate(443 154)">
                         <rect width="63.588" height="23" fill="#78C54A" fill-rule="nonzero" rx="2.1"></rect><g>
                             <g filter="url(#bidwahrx2a)" transform="translate(8.542 6.024)"><g fill="#2789FF">
                                 <path d="M1.724 0c-.145-.004-.28.065-.364.184C.476 1.385 0 2.842 0 4.34c0 1.497.48 2.955 1.364 4.157.067.096.17.16.284.177.115.02.232-.01.325-.08.094-.07.155-.176.17-.293.016-.115-.016-.233-.088-.325C1.281 6.922.865 5.649.865 4.339S1.28 1.753 2.055.7c.099-.13.117-.304.047-.452-.07-.148-.216-.245-.378-.248zM12.067 0c-.158.01-.3.108-.366.254-.067.148-.048.32.05.448.774 1.051 1.191 2.326 1.191 3.637 0 1.31-.42 2.584-1.195 3.636-.068.093-.097.209-.08.324.016.115.077.217.17.287.091.07.206.099.32.082.114-.017.217-.078.285-.171.884-1.203 1.363-2.661 1.363-4.158 0-1.497-.479-2.954-1.363-4.155-.077-.11-.199-.178-.331-.183h-.043z" transform="translate(0 1.294)"></path>
                                 <path d="M3.166 1.284c-.017 0-.034 0-.05.003-.127.015-.24.086-.31.194-.576.84-.885 1.835-.885 2.858 0 1.022.31 2.02.885 2.861.134.198.404.248.6.11.197-.136.246-.408.111-.606-.476-.695-.733-1.52-.733-2.365 0-.846.257-1.669.733-2.363.095-.134.109-.31.034-.456-.073-.146-.222-.237-.385-.236zM10.633 1.287c-.16.002-.305.095-.378.24-.072.144-.059.316.034.448.477.695.73 1.518.73 2.363 0 .847-.253 1.671-.73 2.367-.135.198-.086.47.11.606.197.136.466.087.6-.11.576-.841.883-1.84.883-2.862 0-1.023-.307-2.018-.882-2.858-.082-.124-.22-.197-.367-.194zM5.64 1.582l-.044.001c-.224.019-.395.208-.395.434v4.646c0 .163.09.311.234.387.142.073.315.061.447-.033l3.261-2.32v-.003c.114-.081.181-.213.181-.354s-.068-.273-.18-.356L5.881 1.66c-.072-.05-.155-.077-.242-.077z" transform="translate(0 1.294)"></path>
                                 <path d="M6.064 2.856L8.146 4.339 6.065 5.823 6.065 2.857z" transform="translate(0 1.294)"></path></g></g>
                                 <path fill="#1A1C21" fill-rule="nonzero" d="M27.302 9.31V8.175h-3.675V1.134H22.22V9.31h5.082zm2.808 0V1.134h-1.401V9.31h1.401zm5.516 0l2.914-8.176h-1.546l-2.058 6.395-2.035-6.395h-1.54l2.902 8.176h1.363zm9.364 0V8.175h-3.887V5.66h3.325V4.537h-3.325V2.279h3.848V1.134h-5.255V9.31h5.294z" transform="translate(8.542 6.024)"></path>
                                 </g></g></g></g></svg>
               </div>
              </div>  
                   </div> 
          </a> 
          <a className="live_blks" href="https://www.discoveryplus.in/channel/discovery-channel?liveStream=true">
             <div className="subboxes">
                <div className="img_contain" style={{ backgroundImage:`url(${Animal})` }}>
               <div className="img_details">
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 64 23" className="live_style"><defs>
                     <filter id="bidwahrx2a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.129412 0 0 0 1.000000 0"></feColorMatrix></filter>
                     </defs><g fill="none" fill-rule="evenodd"><g><g transform="translate(-443 -154) translate(443 154)">
                         <rect width="63.588" height="23" fill="#78C54A" fill-rule="nonzero" rx="2.1"></rect><g>
                             <g filter="url(#bidwahrx2a)" transform="translate(8.542 6.024)"><g fill="#2789FF">
                                 <path d="M1.724 0c-.145-.004-.28.065-.364.184C.476 1.385 0 2.842 0 4.34c0 1.497.48 2.955 1.364 4.157.067.096.17.16.284.177.115.02.232-.01.325-.08.094-.07.155-.176.17-.293.016-.115-.016-.233-.088-.325C1.281 6.922.865 5.649.865 4.339S1.28 1.753 2.055.7c.099-.13.117-.304.047-.452-.07-.148-.216-.245-.378-.248zM12.067 0c-.158.01-.3.108-.366.254-.067.148-.048.32.05.448.774 1.051 1.191 2.326 1.191 3.637 0 1.31-.42 2.584-1.195 3.636-.068.093-.097.209-.08.324.016.115.077.217.17.287.091.07.206.099.32.082.114-.017.217-.078.285-.171.884-1.203 1.363-2.661 1.363-4.158 0-1.497-.479-2.954-1.363-4.155-.077-.11-.199-.178-.331-.183h-.043z" transform="translate(0 1.294)"></path>
                                 <path d="M3.166 1.284c-.017 0-.034 0-.05.003-.127.015-.24.086-.31.194-.576.84-.885 1.835-.885 2.858 0 1.022.31 2.02.885 2.861.134.198.404.248.6.11.197-.136.246-.408.111-.606-.476-.695-.733-1.52-.733-2.365 0-.846.257-1.669.733-2.363.095-.134.109-.31.034-.456-.073-.146-.222-.237-.385-.236zM10.633 1.287c-.16.002-.305.095-.378.24-.072.144-.059.316.034.448.477.695.73 1.518.73 2.363 0 .847-.253 1.671-.73 2.367-.135.198-.086.47.11.606.197.136.466.087.6-.11.576-.841.883-1.84.883-2.862 0-1.023-.307-2.018-.882-2.858-.082-.124-.22-.197-.367-.194zM5.64 1.582l-.044.001c-.224.019-.395.208-.395.434v4.646c0 .163.09.311.234.387.142.073.315.061.447-.033l3.261-2.32v-.003c.114-.081.181-.213.181-.354s-.068-.273-.18-.356L5.881 1.66c-.072-.05-.155-.077-.242-.077z" transform="translate(0 1.294)"></path>
                                 <path d="M6.064 2.856L8.146 4.339 6.065 5.823 6.065 2.857z" transform="translate(0 1.294)"></path></g></g>
                                 <path fill="#1A1C21" fill-rule="nonzero" d="M27.302 9.31V8.175h-3.675V1.134H22.22V9.31h5.082zm2.808 0V1.134h-1.401V9.31h1.401zm5.516 0l2.914-8.176h-1.546l-2.058 6.395-2.035-6.395h-1.54l2.902 8.176h1.363zm9.364 0V8.175h-3.887V5.66h3.325V4.537h-3.325V2.279h3.848V1.134h-5.255V9.31h5.294z" transform="translate(8.542 6.024)"></path>
                                 </g></g></g></g></svg>
               </div>
              </div>  
                   </div> 
          </a> 
          <a className="live_blks" href="https://www.discoveryplus.in/channel/discovery-channel?liveStream=true">
             <div className="subboxes">
                <div className="img_contain" style={{ backgroundImage:`url(${Tlc})` }}>
               <div className="img_details">
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 64 23" className="live_style"><defs>
                     <filter id="bidwahrx2a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.129412 0 0 0 1.000000 0"></feColorMatrix></filter>
                     </defs><g fill="none" fill-rule="evenodd"><g><g transform="translate(-443 -154) translate(443 154)">
                         <rect width="63.588" height="23" fill="#78C54A" fill-rule="nonzero" rx="2.1"></rect><g>
                             <g filter="url(#bidwahrx2a)" transform="translate(8.542 6.024)"><g fill="#2789FF">
                                 <path d="M1.724 0c-.145-.004-.28.065-.364.184C.476 1.385 0 2.842 0 4.34c0 1.497.48 2.955 1.364 4.157.067.096.17.16.284.177.115.02.232-.01.325-.08.094-.07.155-.176.17-.293.016-.115-.016-.233-.088-.325C1.281 6.922.865 5.649.865 4.339S1.28 1.753 2.055.7c.099-.13.117-.304.047-.452-.07-.148-.216-.245-.378-.248zM12.067 0c-.158.01-.3.108-.366.254-.067.148-.048.32.05.448.774 1.051 1.191 2.326 1.191 3.637 0 1.31-.42 2.584-1.195 3.636-.068.093-.097.209-.08.324.016.115.077.217.17.287.091.07.206.099.32.082.114-.017.217-.078.285-.171.884-1.203 1.363-2.661 1.363-4.158 0-1.497-.479-2.954-1.363-4.155-.077-.11-.199-.178-.331-.183h-.043z" transform="translate(0 1.294)"></path>
                                 <path d="M3.166 1.284c-.017 0-.034 0-.05.003-.127.015-.24.086-.31.194-.576.84-.885 1.835-.885 2.858 0 1.022.31 2.02.885 2.861.134.198.404.248.6.11.197-.136.246-.408.111-.606-.476-.695-.733-1.52-.733-2.365 0-.846.257-1.669.733-2.363.095-.134.109-.31.034-.456-.073-.146-.222-.237-.385-.236zM10.633 1.287c-.16.002-.305.095-.378.24-.072.144-.059.316.034.448.477.695.73 1.518.73 2.363 0 .847-.253 1.671-.73 2.367-.135.198-.086.47.11.606.197.136.466.087.6-.11.576-.841.883-1.84.883-2.862 0-1.023-.307-2.018-.882-2.858-.082-.124-.22-.197-.367-.194zM5.64 1.582l-.044.001c-.224.019-.395.208-.395.434v4.646c0 .163.09.311.234.387.142.073.315.061.447-.033l3.261-2.32v-.003c.114-.081.181-.213.181-.354s-.068-.273-.18-.356L5.881 1.66c-.072-.05-.155-.077-.242-.077z" transform="translate(0 1.294)"></path>
                                 <path d="M6.064 2.856L8.146 4.339 6.065 5.823 6.065 2.857z" transform="translate(0 1.294)"></path></g></g>
                                 <path fill="#1A1C21" fill-rule="nonzero" d="M27.302 9.31V8.175h-3.675V1.134H22.22V9.31h5.082zm2.808 0V1.134h-1.401V9.31h1.401zm5.516 0l2.914-8.176h-1.546l-2.058 6.395-2.035-6.395h-1.54l2.902 8.176h1.363zm9.364 0V8.175h-3.887V5.66h3.325V4.537h-3.325V2.279h3.848V1.134h-5.255V9.31h5.294z" transform="translate(8.542 6.024)"></path>
                                 </g></g></g></g></svg>
               </div>
              </div>  
                   </div> 
          </a> 
          <a className="live_blks" href="https://www.discoveryplus.in/channel/discovery-channel?liveStream=true">
             <div className="subboxes">
                <div className="img_contain" style={{ backgroundImage:`url(${Kid})` }}>
               <div className="img_details">
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 64 23" className="live_style"><defs>
                     <filter id="bidwahrx2a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.129412 0 0 0 1.000000 0"></feColorMatrix></filter>
                     </defs><g fill="none" fill-rule="evenodd"><g><g transform="translate(-443 -154) translate(443 154)">
                         <rect width="63.588" height="23" fill="#78C54A" fill-rule="nonzero" rx="2.1"></rect><g>
                             <g filter="url(#bidwahrx2a)" transform="translate(8.542 6.024)"><g fill="#2789FF">
                                 <path d="M1.724 0c-.145-.004-.28.065-.364.184C.476 1.385 0 2.842 0 4.34c0 1.497.48 2.955 1.364 4.157.067.096.17.16.284.177.115.02.232-.01.325-.08.094-.07.155-.176.17-.293.016-.115-.016-.233-.088-.325C1.281 6.922.865 5.649.865 4.339S1.28 1.753 2.055.7c.099-.13.117-.304.047-.452-.07-.148-.216-.245-.378-.248zM12.067 0c-.158.01-.3.108-.366.254-.067.148-.048.32.05.448.774 1.051 1.191 2.326 1.191 3.637 0 1.31-.42 2.584-1.195 3.636-.068.093-.097.209-.08.324.016.115.077.217.17.287.091.07.206.099.32.082.114-.017.217-.078.285-.171.884-1.203 1.363-2.661 1.363-4.158 0-1.497-.479-2.954-1.363-4.155-.077-.11-.199-.178-.331-.183h-.043z" transform="translate(0 1.294)"></path>
                                 <path d="M3.166 1.284c-.017 0-.034 0-.05.003-.127.015-.24.086-.31.194-.576.84-.885 1.835-.885 2.858 0 1.022.31 2.02.885 2.861.134.198.404.248.6.11.197-.136.246-.408.111-.606-.476-.695-.733-1.52-.733-2.365 0-.846.257-1.669.733-2.363.095-.134.109-.31.034-.456-.073-.146-.222-.237-.385-.236zM10.633 1.287c-.16.002-.305.095-.378.24-.072.144-.059.316.034.448.477.695.73 1.518.73 2.363 0 .847-.253 1.671-.73 2.367-.135.198-.086.47.11.606.197.136.466.087.6-.11.576-.841.883-1.84.883-2.862 0-1.023-.307-2.018-.882-2.858-.082-.124-.22-.197-.367-.194zM5.64 1.582l-.044.001c-.224.019-.395.208-.395.434v4.646c0 .163.09.311.234.387.142.073.315.061.447-.033l3.261-2.32v-.003c.114-.081.181-.213.181-.354s-.068-.273-.18-.356L5.881 1.66c-.072-.05-.155-.077-.242-.077z" transform="translate(0 1.294)"></path>
                                 <path d="M6.064 2.856L8.146 4.339 6.065 5.823 6.065 2.857z" transform="translate(0 1.294)"></path></g></g>
                                 <path fill="#1A1C21" fill-rule="nonzero" d="M27.302 9.31V8.175h-3.675V1.134H22.22V9.31h5.082zm2.808 0V1.134h-1.401V9.31h1.401zm5.516 0l2.914-8.176h-1.546l-2.058 6.395-2.035-6.395h-1.54l2.902 8.176h1.363zm9.364 0V8.175h-3.887V5.66h3.325V4.537h-3.325V2.279h3.848V1.134h-5.255V9.31h5.294z" transform="translate(8.542 6.024)"></path>
                                 </g></g></g></g></svg>
               </div>
              </div>  
                   </div> 
          </a> 
          <a className="live_blks" href="">
             <div className="subboxes">
                <div className="img_contain" style={{ backgroundImage:`url(${Turbo})` }}>
               <div className="img_details">
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 64 23" className="live_style"><defs>
                     <filter id="bidwahrx2a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.129412 0 0 0 1.000000 0"></feColorMatrix></filter>
                     </defs><g fill="none" fill-rule="evenodd"><g><g transform="translate(-443 -154) translate(443 154)">
                         <rect width="63.588" height="23" fill="#78C54A" fill-rule="nonzero" rx="2.1"></rect><g>
                             <g filter="url(#bidwahrx2a)" transform="translate(8.542 6.024)"><g fill="#2789FF">
                                 <path d="M1.724 0c-.145-.004-.28.065-.364.184C.476 1.385 0 2.842 0 4.34c0 1.497.48 2.955 1.364 4.157.067.096.17.16.284.177.115.02.232-.01.325-.08.094-.07.155-.176.17-.293.016-.115-.016-.233-.088-.325C1.281 6.922.865 5.649.865 4.339S1.28 1.753 2.055.7c.099-.13.117-.304.047-.452-.07-.148-.216-.245-.378-.248zM12.067 0c-.158.01-.3.108-.366.254-.067.148-.048.32.05.448.774 1.051 1.191 2.326 1.191 3.637 0 1.31-.42 2.584-1.195 3.636-.068.093-.097.209-.08.324.016.115.077.217.17.287.091.07.206.099.32.082.114-.017.217-.078.285-.171.884-1.203 1.363-2.661 1.363-4.158 0-1.497-.479-2.954-1.363-4.155-.077-.11-.199-.178-.331-.183h-.043z" transform="translate(0 1.294)"></path>
                                 <path d="M3.166 1.284c-.017 0-.034 0-.05.003-.127.015-.24.086-.31.194-.576.84-.885 1.835-.885 2.858 0 1.022.31 2.02.885 2.861.134.198.404.248.6.11.197-.136.246-.408.111-.606-.476-.695-.733-1.52-.733-2.365 0-.846.257-1.669.733-2.363.095-.134.109-.31.034-.456-.073-.146-.222-.237-.385-.236zM10.633 1.287c-.16.002-.305.095-.378.24-.072.144-.059.316.034.448.477.695.73 1.518.73 2.363 0 .847-.253 1.671-.73 2.367-.135.198-.086.47.11.606.197.136.466.087.6-.11.576-.841.883-1.84.883-2.862 0-1.023-.307-2.018-.882-2.858-.082-.124-.22-.197-.367-.194zM5.64 1.582l-.044.001c-.224.019-.395.208-.395.434v4.646c0 .163.09.311.234.387.142.073.315.061.447-.033l3.261-2.32v-.003c.114-.081.181-.213.181-.354s-.068-.273-.18-.356L5.881 1.66c-.072-.05-.155-.077-.242-.077z" transform="translate(0 1.294)"></path>
                                 <path d="M6.064 2.856L8.146 4.339 6.065 5.823 6.065 2.857z" transform="translate(0 1.294)"></path></g></g>
                                 <path fill="#1A1C21" fill-rule="nonzero" d="M27.302 9.31V8.175h-3.675V1.134H22.22V9.31h5.082zm2.808 0V1.134h-1.401V9.31h1.401zm5.516 0l2.914-8.176h-1.546l-2.058 6.395-2.035-6.395h-1.54l2.902 8.176h1.363zm9.364 0V8.175h-3.887V5.66h3.325V4.537h-3.325V2.279h3.848V1.134h-5.255V9.31h5.294z" transform="translate(8.542 6.024)"></path>
                                 </g></g></g></g></svg>
               </div>
              </div>  
                   </div> 
          </a> 
          <a className="live_blks" href="https://www.discoveryplus.in/channel/discovery-channel?liveStream=true">
             <div className="subboxes">
                <div className="img_contain" style={{ backgroundImage:`url(${Euro})` }}>
               <div className="img_details">
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 64 23" className="live_style"><defs>
                     <filter id="bidwahrx2a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.129412 0 0 0 1.000000 0"></feColorMatrix></filter>
                     </defs><g fill="none" fill-rule="evenodd"><g><g transform="translate(-443 -154) translate(443 154)">
                         <rect width="63.588" height="23" fill="#78C54A" fill-rule="nonzero" rx="2.1"></rect><g>
                             <g filter="url(#bidwahrx2a)" transform="translate(8.542 6.024)"><g fill="#2789FF">
                                 <path d="M1.724 0c-.145-.004-.28.065-.364.184C.476 1.385 0 2.842 0 4.34c0 1.497.48 2.955 1.364 4.157.067.096.17.16.284.177.115.02.232-.01.325-.08.094-.07.155-.176.17-.293.016-.115-.016-.233-.088-.325C1.281 6.922.865 5.649.865 4.339S1.28 1.753 2.055.7c.099-.13.117-.304.047-.452-.07-.148-.216-.245-.378-.248zM12.067 0c-.158.01-.3.108-.366.254-.067.148-.048.32.05.448.774 1.051 1.191 2.326 1.191 3.637 0 1.31-.42 2.584-1.195 3.636-.068.093-.097.209-.08.324.016.115.077.217.17.287.091.07.206.099.32.082.114-.017.217-.078.285-.171.884-1.203 1.363-2.661 1.363-4.158 0-1.497-.479-2.954-1.363-4.155-.077-.11-.199-.178-.331-.183h-.043z" transform="translate(0 1.294)"></path>
                                 <path d="M3.166 1.284c-.017 0-.034 0-.05.003-.127.015-.24.086-.31.194-.576.84-.885 1.835-.885 2.858 0 1.022.31 2.02.885 2.861.134.198.404.248.6.11.197-.136.246-.408.111-.606-.476-.695-.733-1.52-.733-2.365 0-.846.257-1.669.733-2.363.095-.134.109-.31.034-.456-.073-.146-.222-.237-.385-.236zM10.633 1.287c-.16.002-.305.095-.378.24-.072.144-.059.316.034.448.477.695.73 1.518.73 2.363 0 .847-.253 1.671-.73 2.367-.135.198-.086.47.11.606.197.136.466.087.6-.11.576-.841.883-1.84.883-2.862 0-1.023-.307-2.018-.882-2.858-.082-.124-.22-.197-.367-.194zM5.64 1.582l-.044.001c-.224.019-.395.208-.395.434v4.646c0 .163.09.311.234.387.142.073.315.061.447-.033l3.261-2.32v-.003c.114-.081.181-.213.181-.354s-.068-.273-.18-.356L5.881 1.66c-.072-.05-.155-.077-.242-.077z" transform="translate(0 1.294)"></path>
                                 <path d="M6.064 2.856L8.146 4.339 6.065 5.823 6.065 2.857z" transform="translate(0 1.294)"></path></g></g>
                                 <path fill="#1A1C21" fill-rule="nonzero" d="M27.302 9.31V8.175h-3.675V1.134H22.22V9.31h5.082zm2.808 0V1.134h-1.401V9.31h1.401zm5.516 0l2.914-8.176h-1.546l-2.058 6.395-2.035-6.395h-1.54l2.902 8.176h1.363zm9.364 0V8.175h-3.887V5.66h3.325V4.537h-3.325V2.279h3.848V1.134h-5.255V9.31h5.294z" transform="translate(8.542 6.024)"></path>
                                 </g></g></g></g></svg>
               </div>
              </div>  
                   </div> 
          </a> 
          <a className="live_blks" href="https://www.discoveryplus.in/channel/discovery-channel?liveStream=true">
             <div className="subboxes">
                <div className="img_contain" style={{ backgroundImage:`url(${Food})` }}>
               <div className="img_details">
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 64 23" className="live_style"><defs>
                     <filter id="bidwahrx2a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.129412 0 0 0 1.000000 0"></feColorMatrix></filter>
                     </defs><g fill="none" fill-rule="evenodd"><g><g transform="translate(-443 -154) translate(443 154)">
                         <rect width="63.588" height="23" fill="#78C54A" fill-rule="nonzero" rx="2.1"></rect><g>
                             <g filter="url(#bidwahrx2a)" transform="translate(8.542 6.024)"><g fill="#2789FF">
                                 <path d="M1.724 0c-.145-.004-.28.065-.364.184C.476 1.385 0 2.842 0 4.34c0 1.497.48 2.955 1.364 4.157.067.096.17.16.284.177.115.02.232-.01.325-.08.094-.07.155-.176.17-.293.016-.115-.016-.233-.088-.325C1.281 6.922.865 5.649.865 4.339S1.28 1.753 2.055.7c.099-.13.117-.304.047-.452-.07-.148-.216-.245-.378-.248zM12.067 0c-.158.01-.3.108-.366.254-.067.148-.048.32.05.448.774 1.051 1.191 2.326 1.191 3.637 0 1.31-.42 2.584-1.195 3.636-.068.093-.097.209-.08.324.016.115.077.217.17.287.091.07.206.099.32.082.114-.017.217-.078.285-.171.884-1.203 1.363-2.661 1.363-4.158 0-1.497-.479-2.954-1.363-4.155-.077-.11-.199-.178-.331-.183h-.043z" transform="translate(0 1.294)"></path>
                                 <path d="M3.166 1.284c-.017 0-.034 0-.05.003-.127.015-.24.086-.31.194-.576.84-.885 1.835-.885 2.858 0 1.022.31 2.02.885 2.861.134.198.404.248.6.11.197-.136.246-.408.111-.606-.476-.695-.733-1.52-.733-2.365 0-.846.257-1.669.733-2.363.095-.134.109-.31.034-.456-.073-.146-.222-.237-.385-.236zM10.633 1.287c-.16.002-.305.095-.378.24-.072.144-.059.316.034.448.477.695.73 1.518.73 2.363 0 .847-.253 1.671-.73 2.367-.135.198-.086.47.11.606.197.136.466.087.6-.11.576-.841.883-1.84.883-2.862 0-1.023-.307-2.018-.882-2.858-.082-.124-.22-.197-.367-.194zM5.64 1.582l-.044.001c-.224.019-.395.208-.395.434v4.646c0 .163.09.311.234.387.142.073.315.061.447-.033l3.261-2.32v-.003c.114-.081.181-.213.181-.354s-.068-.273-.18-.356L5.881 1.66c-.072-.05-.155-.077-.242-.077z" transform="translate(0 1.294)"></path>
                                 <path d="M6.064 2.856L8.146 4.339 6.065 5.823 6.065 2.857z" transform="translate(0 1.294)"></path></g></g>
                                 <path fill="#1A1C21" fill-rule="nonzero" d="M27.302 9.31V8.175h-3.675V1.134H22.22V9.31h5.082zm2.808 0V1.134h-1.401V9.31h1.401zm5.516 0l2.914-8.176h-1.546l-2.058 6.395-2.035-6.395h-1.54l2.902 8.176h1.363zm9.364 0V8.175h-3.887V5.66h3.325V4.537h-3.325V2.279h3.848V1.134h-5.255V9.31h5.294z" transform="translate(8.542 6.024)"></path>
                                 </g></g></g></g></svg>
               </div>
              </div>  

                   </div> 

          </a> 
          <a className="live_blks" href="https://www.discoveryplus.in/channel/discovery-channel?liveStream=true">
             <div className="subboxes">
                <div className="img_contain" style={{ backgroundImage:`url(${Dmax})` }}>
               <div className="img_details">
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 64 23" className="live_style"><defs>
                     <filter id="bidwahrx2a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.129412 0 0 0 1.000000 0"></feColorMatrix></filter>
                     </defs><g fill="none" fill-rule="evenodd"><g><g transform="translate(-443 -154) translate(443 154)">
                         <rect width="63.588" height="23" fill="#78C54A" fill-rule="nonzero" rx="2.1"></rect><g>
                             <g filter="url(#bidwahrx2a)" transform="translate(8.542 6.024)"><g fill="#2789FF">
                                 <path d="M1.724 0c-.145-.004-.28.065-.364.184C.476 1.385 0 2.842 0 4.34c0 1.497.48 2.955 1.364 4.157.067.096.17.16.284.177.115.02.232-.01.325-.08.094-.07.155-.176.17-.293.016-.115-.016-.233-.088-.325C1.281 6.922.865 5.649.865 4.339S1.28 1.753 2.055.7c.099-.13.117-.304.047-.452-.07-.148-.216-.245-.378-.248zM12.067 0c-.158.01-.3.108-.366.254-.067.148-.048.32.05.448.774 1.051 1.191 2.326 1.191 3.637 0 1.31-.42 2.584-1.195 3.636-.068.093-.097.209-.08.324.016.115.077.217.17.287.091.07.206.099.32.082.114-.017.217-.078.285-.171.884-1.203 1.363-2.661 1.363-4.158 0-1.497-.479-2.954-1.363-4.155-.077-.11-.199-.178-.331-.183h-.043z" transform="translate(0 1.294)"></path>
                                 <path d="M3.166 1.284c-.017 0-.034 0-.05.003-.127.015-.24.086-.31.194-.576.84-.885 1.835-.885 2.858 0 1.022.31 2.02.885 2.861.134.198.404.248.6.11.197-.136.246-.408.111-.606-.476-.695-.733-1.52-.733-2.365 0-.846.257-1.669.733-2.363.095-.134.109-.31.034-.456-.073-.146-.222-.237-.385-.236zM10.633 1.287c-.16.002-.305.095-.378.24-.072.144-.059.316.034.448.477.695.73 1.518.73 2.363 0 .847-.253 1.671-.73 2.367-.135.198-.086.47.11.606.197.136.466.087.6-.11.576-.841.883-1.84.883-2.862 0-1.023-.307-2.018-.882-2.858-.082-.124-.22-.197-.367-.194zM5.64 1.582l-.044.001c-.224.019-.395.208-.395.434v4.646c0 .163.09.311.234.387.142.073.315.061.447-.033l3.261-2.32v-.003c.114-.081.181-.213.181-.354s-.068-.273-.18-.356L5.881 1.66c-.072-.05-.155-.077-.242-.077z" transform="translate(0 1.294)"></path>
                                 <path d="M6.064 2.856L8.146 4.339 6.065 5.823 6.065 2.857z" transform="translate(0 1.294)"></path></g></g>
                                 <path fill="#1A1C21" fill-rule="nonzero" d="M27.302 9.31V8.175h-3.675V1.134H22.22V9.31h5.082zm2.808 0V1.134h-1.401V9.31h1.401zm5.516 0l2.914-8.176h-1.546l-2.058 6.395-2.035-6.395h-1.54l2.902 8.176h1.363zm9.364 0V8.175h-3.887V5.66h3.325V4.537h-3.325V2.279h3.848V1.134h-5.255V9.31h5.294z" transform="translate(8.542 6.024)"></path>
                                 </g></g></g></g></svg>
               </div>
              </div>  
                   </div> 
          </a> 
          <a className="live_blks" href="https://www.discoveryplus.in/channel/discovery-channel?liveStream=true">
             <div className="subboxes">
                <div className="img_contain" style={{ backgroundImage:`url(${Trvl})` }}>
               <div className="img_details">
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 64 23" className="live_style"><defs>
                     <filter id="bidwahrx2a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.129412 0 0 0 1.000000 0"></feColorMatrix></filter>
                     </defs><g fill="none" fill-rule="evenodd"><g><g transform="translate(-443 -154) translate(443 154)">
                         <rect width="63.588" height="23" fill="#78C54A" fill-rule="nonzero" rx="2.1"></rect><g>
                             <g filter="url(#bidwahrx2a)" transform="translate(8.542 6.024)"><g fill="#2789FF">
                                 <path d="M1.724 0c-.145-.004-.28.065-.364.184C.476 1.385 0 2.842 0 4.34c0 1.497.48 2.955 1.364 4.157.067.096.17.16.284.177.115.02.232-.01.325-.08.094-.07.155-.176.17-.293.016-.115-.016-.233-.088-.325C1.281 6.922.865 5.649.865 4.339S1.28 1.753 2.055.7c.099-.13.117-.304.047-.452-.07-.148-.216-.245-.378-.248zM12.067 0c-.158.01-.3.108-.366.254-.067.148-.048.32.05.448.774 1.051 1.191 2.326 1.191 3.637 0 1.31-.42 2.584-1.195 3.636-.068.093-.097.209-.08.324.016.115.077.217.17.287.091.07.206.099.32.082.114-.017.217-.078.285-.171.884-1.203 1.363-2.661 1.363-4.158 0-1.497-.479-2.954-1.363-4.155-.077-.11-.199-.178-.331-.183h-.043z" transform="translate(0 1.294)"></path>
                                 <path d="M3.166 1.284c-.017 0-.034 0-.05.003-.127.015-.24.086-.31.194-.576.84-.885 1.835-.885 2.858 0 1.022.31 2.02.885 2.861.134.198.404.248.6.11.197-.136.246-.408.111-.606-.476-.695-.733-1.52-.733-2.365 0-.846.257-1.669.733-2.363.095-.134.109-.31.034-.456-.073-.146-.222-.237-.385-.236zM10.633 1.287c-.16.002-.305.095-.378.24-.072.144-.059.316.034.448.477.695.73 1.518.73 2.363 0 .847-.253 1.671-.73 2.367-.135.198-.086.47.11.606.197.136.466.087.6-.11.576-.841.883-1.84.883-2.862 0-1.023-.307-2.018-.882-2.858-.082-.124-.22-.197-.367-.194zM5.64 1.582l-.044.001c-.224.019-.395.208-.395.434v4.646c0 .163.09.311.234.387.142.073.315.061.447-.033l3.261-2.32v-.003c.114-.081.181-.213.181-.354s-.068-.273-.18-.356L5.881 1.66c-.072-.05-.155-.077-.242-.077z" transform="translate(0 1.294)"></path>
                                 <path d="M6.064 2.856L8.146 4.339 6.065 5.823 6.065 2.857z" transform="translate(0 1.294)"></path></g></g>
                                 <path fill="#1A1C21" fill-rule="nonzero" d="M27.302 9.31V8.175h-3.675V1.134H22.22V9.31h5.082zm2.808 0V1.134h-1.401V9.31h1.401zm5.516 0l2.914-8.176h-1.546l-2.058 6.395-2.035-6.395h-1.54l2.902 8.176h1.363zm9.364 0V8.175h-3.887V5.66h3.325V4.537h-3.325V2.279h3.848V1.134h-5.255V9.31h5.294z" transform="translate(8.542 6.024)"></path>
                                 </g></g></g></g></svg>
               </div>
              </div>  
                   </div> 
          </a> 
             
         </div>

         </div>

         <div className="block2">
        
        <div id="exploreHeader"> <h6 className="heading" >Explore Shows and Full Episodes!</h6></div>
        

         <div className="live-grid">

         <div>
            <Link to="/home">
           <div className="blk2_height">
             <div className="blk2_contain" style={{ backgroundImage:`url(${Bbc})` }}>
                 <div className="background"></div>
             </div>
             </div>
             
             </Link>
            
         </div>
         <div> 
            <Link to="/kids">
             <a className="blk2_subs" href=""><div className="blk2_height">
             <div className="blk2_contain" style={{ backgroundImage:`url(${AnE})` }}>
                 <div className="background"></div>
             </div>
             </div>
             </a>
             </Link>
         </div>
         <div>
            <Link to="/shorts">
             <a className="blk2_subs" href=""><div className="blk2_height">
             <div className="blk2_contain" style={{ backgroundImage:`url(${All_exp})` }}>
                 <div className="background"></div>
             </div>
             </div>
             </a>
             </Link>

         </div>
         <div>  
            <Link to="/shorts">
             <a className="blk2_subs" href=""><div className="blk2_height">
             <div className="blk2_contain" style={{ backgroundImage:`url(${Mind})` }}>
                 <div className="background"></div>
             </div>
             </div>
             </a>
             </Link>
         </div>
         </div>
        
         </div>
         
     </div>
     
     
    {/* </div> */}

    </>
}

