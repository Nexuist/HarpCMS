<template>
    <form :id="id">
        <slot :rootJson="rootJson"></slot>
    </form>
</template>

<script>
export default {
  props: ["page", "id"],
  created: function() {
    this.rootJson = {
      announcements: [
        "Support UHSSE through Stop & Shop A+ Rewards https://drive.google.com/open?id=0B9ryMf4-VSDSTjU0RDF4OWNMQUE ",
        "After Grad Fundraiser April 15th https://drive.google.com/open?id=1aXLOZ2MJ-Z9dvmbI-2Lqz22nxXYiweuj"
      ],
      banners: "/assets/img/home.jpg",
      gallery: [
        { caption: "", link: "about:blank", src: "assets/img/about.jpg" },
        { caption: "", link: "about:blank", src: "assets/img/home.jpg" },
        {
          caption: "",
          link: "about:blank",
          src:
            "https://lh3.google.com/u/0/d/0B9ryMf4-VSDSaGZUUVlDcHRSRUU=w1920-h950-iv1"
        },
        {
          caption: "",
          link: "ECE Marine Science",
          src:
            "https://lh3.google.com/u/0/d/0B9ryMf4-VSDSNDA0SWdsZGlSVzQ=w1920-h950-iv1"
        },
        {
          caption: "",
          link: "Graduation on University of Hartford campus",
          src:
            "https://lh3.google.com/u/0/d/0B9ryMf4-VSDSeFVnUXd4Zzk3REE=w1920-h950-iv2"
        },
        {
          caption: "",
          link: "",
          src:
            "https://lh3.google.com/u/0/d/0B9ryMf4-VSDSYVRRQWdycVQ2NDg=w1920-h950-iv1"
        },
        {
          caption: "",
          link: "",
          src:
            "https://lh3.google.com/u/0/d/0B9ryMf4-VSDSTjhZWDRPMjZ3Rms=w1920-h950-iv1"
        },
        {
          caption: "UHSSE Student presenting authentic research",
          link: "",
          src:
            "https://lh3.google.com/u/0/d/0B9ryMf4-VSDSMGljU3Y1N1k3YXc=w1920-h950-iv1"
        }
      ],
      lead:
        "Early college high school located on the campus of University of Hartford",
      name: "University High School of Science and Engineering",
      phoneNumber: "(860) 695-9020",
      qualities: [
        {
          backgroundColor: "#ed4646",
          description:
            "Students are presented with a wide variety of high level courses throughout their four years.",
          glyph: "glyphicon-blackboard",
          name: "Unparalleled Education"
        },
        {
          backgroundColor: "#b72626",
          description:
            "A partnership with UHart allows our students to get a full taste of the college world.",
          glyph: "glyphicon-education",
          name: " College Collaboration"
        },
        {
          backgroundColor: "#6E1515",
          description:
            "From popcorn club to robotics to track and field, there is something for everyone!",
          glyph: "glyphicon-sunglasses",
          name: " Extracurricular Excellence"
        }
      ]
    };
  },
  data: () => {
    return {
      rootJson: {}
    };
  }
};
</script>