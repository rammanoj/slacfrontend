const login = () => ({
  paper: {
    marginTop: "calc(80px + 8vw)",
    padding: "calc(10px + 2vw)"
  },
  header: {
    textAlign: "center"
  }
});

const listing = () => ({
  list: {
    marginTop: "10px"
  },
  ul: {
    listStyle: "none"
  },
  button: {
    width: "100%"
  }
});

const register = () => ({
  paper: {
    marginTop: "calc(80px + 6vw)",
    paddingRight: "30px",
    paddingTop: "30px"
  },
  header: {
    textAlign: "center"
  }
});

const home = () => ({});

export { login, listing, register, home };
