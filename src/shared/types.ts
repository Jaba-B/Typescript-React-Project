export enum SelectedPage {
    Home = "home",
    Specialness = "specialness",
    Albums = "albums",
    ContactUs = "contactus"
}

export interface SpecialnessType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface AlbumType {
    name: string;
    description: string;
    image: string;
}
