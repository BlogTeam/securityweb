import React from "react";
import "./criminal.css";
import useSound from "use-sound"; // Import useSound from react-use-sound
import Sound from "../../assets/wave.mp3"

const Criminal = () => {
    const soundUrl = Sound;
  const [play] = useSound(soundUrl); 
  return (
    <div class="relative">
  <div class="criminal border-2 border-dashed bg-[#424769] rounded-md m-14 p-20 flex text-2xl relative">
    <div class="basis-1/4">
      <img
        class="h-96"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ted_Bundy_headshot.jpg/431px-Ted_Bundy_headshot.jpg"
      />
    </div>
    <div class="basis-3/4">
      <div class="mb-8">
        <div class="italic font-bold mb-4  underline">Description</div>
        <div>
          <div>Record Date: January 31, 1978</div>
          <div>Arrest Name : Ted Bundy</div>
          <div>Native Place : Burlington, Vermont, U.S</div>
          <div>Date of Birth : November 24, 1946</div>
        </div>
      </div>
      <div class="border-2 p-6 rounded-md bg-[#676f9d]">
        <div class="italic font-bold mb-4 underline">Criminal Record</div>
        <div>
          notorious serial killer responsible for the murders of young women
          and girls in the 1970s
        </div>
      </div>
    </div>
    <button onMouseEnter={play} type="button" class="absolute top-0 right-0 mt-4 mr-5 text-white bg-[#676f9d] hover:bg-[#2d3250] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
        
      <svg
        class="w-6 h-6  dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M11.209 3.816a1 1 0 0 0-1.966.368l.325 1.74a5.338 5.338 0 0 0-2.8 5.762l.276 1.473.055.296c.258 1.374-.228 2.262-.63 2.998-.285.52-.527.964-.437 1.449.11.586.22 1.173.75 1.074l12.7-2.377c.528-.1.418-.685.308-1.27-.103-.564-.636-1.123-1.195-1.711-.606-.636-1.243-1.306-1.404-2.051-.233-1.085-.275-1.387-.303-1.587-.009-.063-.016-.117-.028-.182a5.338 5.338 0 0 0-5.353-4.39l-.298-1.592Z"
        />
        <path
          fill-rule="evenodd"
          d="M6.539 4.278a1 1 0 0 1 .07 1.412c-1.115 1.23-1.705 2.605-1.83 4.26a1 1 0 0 1-1.995-.15c.16-2.099.929-3.893 2.342-5.453a1 1 0 0 1 1.413-.069Z"
          clip-rule="evenodd"
        />
        <path d="M8.95 19.7c.7.8 1.7 1.3 2.8 1.3 1.6 0 2.9-1.1 3.3-2.5l-6.1 1.2Z" />
      </svg>
      Report
    </button>
  </div>
</div>


    
  );
};

export default Criminal;