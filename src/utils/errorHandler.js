const errorHandler = (code) => {
  //

  switch (code) {
    case "auth/weak-password": {
      return "Password should be at least 6 characters";
    }

    case "auth/email-already-in-use": {
      return "Email already used";
    }

    case "auth/credential-already-in-use": {
      return "credential already used";
    }

    case "auth/invalid-credential": {
      return "Invalid credential";
    }

    case "auth/wrong-password": {
      return "Wrong Password";
    }

    case "auth/network-request-failed": {
      return "Network error please try again later";
    }

    case "auth/too-many-requests": {
      return "Too Many Requests, Please Slow Down";
    }

    default: {
      return "Error, Please try again later";
    }
  }
};

export default errorHandler;
