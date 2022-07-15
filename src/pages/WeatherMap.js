import React from "react";
import { Link } from "react-router-dom";
import Sidetabs from "../components/Sidetabs";

export default function WeatherMap() {
  return (
    <div className="h-screen pb-16 basis-3/4 grow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex justify-around pt-20">
        <div className="py-12 bg-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Weather Radar
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <Link to="LiveWeather">
                  <img
                    src="https://cms.accuweather.com/wp-content/uploads/2022/04/allendalehook_fixed_final.png?w=632"
                    alt="Radar"
                    className="h-60 w-full m-auto rounded-lg outline outline-2 outline-offset-2 outline-blue-800"
                  />
                </Link>
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Live weather map of the world! Check out what the weather looks
                like for you or your friends!
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"></dl>
            </div>
          </div>
        </div>

        <div className="py-12 bg-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Heat Radar
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <img
                  src="https://www.alabamawx.com/wp-content/uploads/2020/07/2020-07-04_11-11-55-600x540.png"
                  alt="Heat Radar"
                  className="w-full h-60 m-auto rounded-lg outline outline-2 outline-offset-2 outline-violet-800"
                />
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Are you curious how hot it is in your area or another? Find it
                all here!
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"></dl>
            </div>
          </div>
        </div>

        <div className="py-12 bg-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Wind Radar
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <img
                  src="https://www.weatherzone.com.au/news-thumbnail/2932264"
                  alt="Wind Radar"
                  className="w-full h-60 m-auto rounded-lg outline outline-2 outline-offset-2 outline-rose-400"
                />
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Sure is windy outside but how fast is it actually going? Lets
                find out here!
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"></dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
