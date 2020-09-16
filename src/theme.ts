const theme = {
  fonts: {
    body: "Roboto,Helvetica,sans-serif",
  },
  fontWeight: {
    body: "normal",
    bold: 700,
  },
  breakpoints: ["576px", "768px", "992px", "1200px"],
  fontSizes: [12, 14],
  colors: {
    background: "#fff",
    primary: "#202124",
    secondary: "#5f6368",
    hover: "#e8eaed",
    //define tab colors here:
    work: "green",
    travel: "blue",
  },
  space: [5, 10, 14],
  text: {
    default: {
      fontFamily: "body",
      fontSize: 1,
    },
    list: {
      new: {
        listDecoration: "none",
        fontWeight: "bold",
        fontSize: 1,
      },
      read: {
        fontSize: 1,
      },
    },
  },
  buttons: {
    primary: {
      color: "primary",
      bg: "background",
      "&:hover": {
        bg: "hover",
        cursor: "pointer",
      },
      width: "100px",
      outline: 0,
    },
    icon: {
      width: "30px",
      height: "46px",
      color: "primary",
      bg: "background",
      "&:hover": {
        bg: "hover",
        cursor: "pointer",
      },
      margin: 0,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
    },
  },
  forms: {
    primary: {
      color: "#313131",
      fontWeight: 600,
    },
    checkbox: {
      color: "secondary",
    },
  },
};

export default theme;
