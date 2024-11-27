import { sms } from "@/data/data"; 

export default function Sm() {
  return (
    <>
      {sms.map((sm) => (
        <a
          href={sm.link}
          key={sm.id}
          target="_blank"
          className="mx-2 flex  text-white/70 hover:text-white transition "
        >
          <sm.icon size="1em" />
        </a>
      ))}
    </>
  );
}
