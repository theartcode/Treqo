export const initPixel = async () => {
  if (typeof window === "undefined") return;
  const ReactPixel = (await import("react-facebook-pixel")).default;
  ReactPixel.init("1511250130615837");
  ReactPixel.pageView();
};

export const trackLead = async (eventId) => {
  if (typeof window === "undefined") return;
  const ReactPixel = (await import("react-facebook-pixel")).default;
  ReactPixel.track("Lead", {}, { eventId: eventId });
};
