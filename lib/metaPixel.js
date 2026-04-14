import ReactPixel from "react-facebook-pixel";
 
export const initPixel = () => {

  ReactPixel.init("1511250130615837");

  ReactPixel.pageView();

};
 
export const trackLead = (eventId) => {

  ReactPixel.track("Lead", {}, { eventId: eventId });

};
 