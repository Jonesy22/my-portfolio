import React from "react";

export default function About() {
	return (
	  <section id="about">
		<div className="container mx-auto flex pt-80 pb-80 md:flex-row flex-col items-center">
		  <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start mb-16 md:mb-0 items-center text-center">
			<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mx-auto my-auto">
			I'm Daniel, a Full Stack Developer living in Portland, OR.
			</h1>
			<div className="flex justify-center align-center mx-auto my-auto">
			  <a
				href="#contact"
				className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
				Work With Me
			  </a>
			  <a
				href="#projects"
				className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
				See My Past Work
			  </a>
			</div>
		  </div>
		</div>
	  </section>
	);
  }