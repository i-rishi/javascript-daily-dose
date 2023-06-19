const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-0 bg-neutral-100 w-full">
      <p className="text-sm py-3 px-8 text-slate-600 border-b-2">India</p>
      <div className=" flex py-3 px-8">
        <div className="[&>*]:mr-6 text-sm text-slate-600 ">
          <a
            className="hover:underline"
            href="https://about.google/?utm_source=google-IN&amp;utm_medium=referral&amp;utm_campaign=hp-footer&amp;fg=1"
            ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://about.google/%3Futm_source%3Dgoogle-IN%26utm_medium%3Dreferral%26utm_campaign%3Dhp-footer%26fg%3D1&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQkNQCCB0"
          >
            About
          </a>
          <a
            className="hover:underline"
            href="https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpafooter&amp;fg=1"
            ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://www.google.com/intl/en_in/ads/%3Fsubid%3Dww-ww-et-g-awa-a-g_hpafoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpafooter%26fg%3D1&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQkdQCCB4"
          >
            Advertising
          </a>
          <a
            className="hover:underline"
            href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpbfooter&amp;fg=1"
            ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://www.google.com/services/%3Fsubid%3Dww-ww-et-g-awa-a-g_hpbfoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpbfooter%26fg%3D1&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQktQCCB8"
          >
            Business
          </a>
          <a
            className="hover:underline"
            href="https://google.com/search/howsearchworks/?fg=1"
          >
            How Search works
          </a>
        </div>
        <div className="ml-auto [&>*]:mr-6 text-sm text-slate-600 ">
          <a
            className="hover:underline"
            href="https://policies.google.com/privacy?hl=en-IN&amp;fg=1"
            ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://policies.google.com/privacy%3Fhl%3Den-IN%26fg%3D1&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQ8awCCCA"
          >
            Privacy
          </a>
          <a
            className="hover:underline"
            href="https://policies.google.com/terms?hl=en-IN&amp;fg=1"
            ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://policies.google.com/terms%3Fhl%3Den-IN%26fg%3D1&amp;ved=0ahUKEwiP4YuP4M7_AhVRRmwGHRecC3QQ8qwCCCE"
          >
            Terms
          </a>
          <a className="hover:underline" href="">
            Setting
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
