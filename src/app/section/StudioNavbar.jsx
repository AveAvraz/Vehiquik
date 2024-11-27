import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";

function StudioNavbar(props) {
  return (
    <div>
      <div>
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <GiReturnArrow className="h-6 w-6 text-[#F7AB0A] mr-2" />
          Go to Vehiquik
        </Link>
      </div>
      {props.renderDefault(props)} {/* Render default content */}
    </div>
  );
}

export default StudioNavbar;
