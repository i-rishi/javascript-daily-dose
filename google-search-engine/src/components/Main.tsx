"use client";
import "regenerator-runtime";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { TbCameraPlus } from "react-icons/tb";
import { MdOutlineMic } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import dynamic from "next/dynamic";

const Main: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const router = useRouter();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListning = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };

  const stopListning = () => {
    SpeechRecognition.stopListening();
    setSearch(transcript);
  };

  const logoUrl: string =
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

  const onSearchEvent = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    router.push(`https://www.google.com/search?q=${search}`);
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <div className="items-center flex flex-col mt-28">
      <Image src={logoUrl} width={270} height={100} alt="Logo" />
      <form
        onSubmit={(e) => onSearchEvent(e)}
        className="flex border items-center mt-7 px-5 py-2 rounded-full hover:shadow-md w-2/5"
      >
        <AiOutlineSearch className="text-xl text-slate-400" />
        <input
          type="text"
          className="w-full focus:outline-none pl-4"
          onChange={(e) => setSearch(e.target.value)}
          value={search || transcript}
        />
        {listening ? (
          <MdOutlineMic
            onClick={() => stopListning()}
            className="text-2xl mr-4 text-slate-500 cursor-pointer"
          />
        ) : (
          <BiMicrophone
            onClick={() => startListning()}
            className="text-2xl mr-4 text-slate-500 cursor-pointer"
          />
        )}

        <TbCameraPlus className="text-2xl text-slate-500 cursor-pointer" />
      </form>
      <div className="mt-8">
        <button
          onClick={(e) => onSearchEvent(e)}
          className="bg-slate-100 py-2 px-4 mr-4 text-sm rounded hover:border "
        >
          Google Search
        </button>
        <button
          onClick={(e) => router.push("https://www.google.com/doodles")}
          className="bg-slate-100 py-2 px-4  text-sm hover:border rounded"
        >
          I'm Feeling Lucky
        </button>
      </div>
      <div className="flex mt-6 text-sm space-x-3">
        <p className="text-slate-500">Google offered in:</p>

        <a
          className="hover:underline text-blue-500 visited:text-purple-700"
          href="https://www.google.com/setprefs?sig=0_AB6Lka4LSSL5zuosJty_GzLHPH8%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQ2ZgBCBQ"
        >
          हिन्दी
        </a>
        <a
          className="hover:underline text-blue-500 visited:text-purple-700"
          href="https://www.google.com/setprefs?sig=0_AB6Lka4LSSL5zuosJty_GzLHPH8%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQ2ZgBCBU"
        >
          বাংলা
        </a>
        <a
          className="hover:underline text-blue-500 visited:text-purple-700"
          href="https://www.google.com/setprefs?sig=0_AB6Lka4LSSL5zuosJty_GzLHPH8%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQ2ZgBCBY"
        >
          తెలుగు
        </a>
        <a
          className="hover:underline text-blue-500 visited:text-purple-700"
          href="https://www.google.com/setprefs?sig=0_AB6Lka4LSSL5zuosJty_GzLHPH8%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQ2ZgBCBc"
        >
          मराठी
        </a>
        <a
          className="hover:underline text-blue-500 visited:text-purple-700"
          href="https://www.google.com/setprefs?sig=0_AB6Lka4LSSL5zuosJty_GzLHPH8%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQ2ZgBCBg"
        >
          தமிழ்
        </a>
        <a
          className="hover:underline text-blue-500 visited:text-purple-700"
          href="https://www.google.com/setprefs?sig=0_AB6Lka4LSSL5zuosJty_GzLHPH8%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQ2ZgBCBk"
        >
          ગુજરાતી
        </a>
        <a
          className="hover:underline text-blue-500 visited:text-purple-700"
          href="https://www.google.com/setprefs?sig=0_AB6Lka4LSSL5zuosJty_GzLHPH8%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQ2ZgBCBo"
        >
          ಕನ್ನಡ
        </a>
        <a
          className="hover:underline text-blue-500 visited:text-purple-700"
          href="https://www.google.com/setprefs?sig=0_AB6Lka4LSSL5zuosJty_GzLHPH8%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQ2ZgBCBs"
        >
          മലയാളം
        </a>
        <a
          className="hover:underline text-blue-500 visited:text-purple-700"
          href="https://www.google.com/setprefs?sig=0_AB6Lka4LSSL5zuosJty_GzLHPH8%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQ2ZgBCBw"
        >
          ਪੰਜਾਬੀ
        </a>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Main), { ssr: false });
