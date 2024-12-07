import MobileNavebar from "./MobileNavebar"
import DesktopNavebar from "./DesktopNavebar"


export default function Navebar() {
  return (
    <div >
      <div className="hidden lg:block ">
        <DesktopNavebar />
      </div>
      <div className="lg:hidden">
        <MobileNavebar />

      </div>
     
    </div>
  )
}
