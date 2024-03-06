import {
    Route,
    Routes,
} from "react-router-dom";
import { HomeComponent } from "../screens/Home/home";
import { GalleryComponent } from "../screens/Gallery/gallery";
import { RoomsComponent } from "../screens/Rooms/rooms";
import { AroundUsComponent } from "../screens/AroundUs/aroundUs";
import { AboutTempleComponent } from "../screens/AboutTemple/aboutTemple"
import { AboutUsComponent } from "../screens/AboutUs/aboutUs";
import { ContactUsComponent } from "../screens/ContactUs/contactUs";

export const RouterComponent = () => {

    return (
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="rooms" element={<RoomsComponent />} />
            <Route path="gallery" element={<GalleryComponent />} />
            <Route path="around_us" element={<AroundUsComponent />} />
            <Route path="about_temple" element={<AboutTempleComponent />} />
            <Route path="about_us" element={<AboutUsComponent />} />
            <Route path="contact" element={<ContactUsComponent />} />
        </Routes>
    )
}