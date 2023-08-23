import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
       justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          dignissimos mollitia quisquam? Quam maiores ipsum unde quia
          perferendis amet quaerat accusantium eum, suscipit veritatis fugiat,
          odit praesentium, tempore non! Et, distinctio odit voluptatibus alias
          nam voluptatum facilis cupiditate dolores, perspiciatis perferendis
          quasi assumenda deserunt porro nulla fugiat officia molestias
          doloribus.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          tempore delectus nisi quo deserunt. Beatae dolorum excepturi quo ipsam
          alias blanditiis distinctio adipisci placeat voluptatum, harum
          dignissimos nulla laudantium sit. Dolor, ex tenetur placeat eligendi
          fugit maxime molestias sit facilis quia dolorem culpa laudantium odio
          fuga architecto inventore nulla. Sit!
        </p>
      </div>
    </div>
  );
};

export default About;
