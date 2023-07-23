import avatar1 from "../../assets/images/avatar1.png"
import avatar2 from "../../assets/images/avatar2.png"
import avatar3   from "../../assets/images/avatar3.png"

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const productData = [
    {
      id: 1,
      imageurl:
        avatar1,
      name: "full name",
      jobtitle: "job title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 2,
      imageurl:
        avatar2,
      name: "full name",
      jobtitle: "job title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 3,
      imageurl:
        avatar3,
        name: "full name",
        jobtitle: "job title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 4,
      imageurl:
        avatar1,
        name: "full name",
        jobtitle: "job title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 5,
      imageurl:
        avatar2,
        name: "full name",
        jobtitle: "job title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 6,
      imageurl:
        avatar3,
        name: "full name",
        jobtitle: "job title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 7,
      imageurl:
        avatar1,
        name: "full name",
        jobtitle: "job title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 8,
      imageurl:avatar3,
        name: "full name",
        jobtitle: "job title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];