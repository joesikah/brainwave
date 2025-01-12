import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import {
  MdArchitecture,
  MdBusinessCenter,
  MdOutlineElectricalServices,
} from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";
import { TbApiApp } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Providing Real World Solutions That Truly Matter"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, i) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <div className="mb-5">
                  {/* <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  /> */}
                  {i === 0 ? (
                    <div className="h-[48px] w-[48px] bg-blue-500 text-white rounded-[10px] flex justify-center items-center">
                      <MdArchitecture className="h-[35px] w-[35px]" />
                    </div>
                  ) : i === 1 ? (
                    <div className="h-[48px] w-[48px] bg-yellow-500 text-white rounded-[10px] flex justify-center items-center">
                      <TbPlugConnected className="h-[35px] w-[35px]" />
                    </div>
                  ) : i === 2 ? (
                    <div className="h-[48px] w-[48px] bg-purple-500 text-white rounded-[10px] flex justify-center items-center">
                      <MdBusinessCenter className="h-[35px] w-[35px]" />
                    </div>
                  ) : i === 3 ? (
                    <div className="h-[48px] w-[48px] bg-green-500 text-white rounded-[10px] flex justify-center items-center">
                      <MdOutlineElectricalServices className="h-[35px] w-[35px]" />
                    </div>
                  ) : i === 4 ? (
                    <div className="h-[48px] w-[48px] bg-orange-500 text-white rounded-[10px] flex justify-center items-center">
                      <TbApiApp className="h-[35px] w-[35px]" />
                    </div>
                  ) : i === 5 ? (
                    <div className="h-[48px] w-[48px] bg-teal-500 text-white rounded-[10px] flex justify-center items-center">
                      <GrTechnology className="h-[35px] w-[35px]" />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 text-n-3">{item.text}</p>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
