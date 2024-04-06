import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LaunchButton = ({ sx = {}, ...props }) => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0(); // Combine both hooks into one line

  return (
    <div>
      {isAuthenticated ? (
        <>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <Button
            variant="contained"
            sx={{ borderRadius: 4, ...sx }}
            {...props}
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
            <KeyboardArrowRightIcon />
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          sx={{ borderRadius: 4, ...sx }}
          {...props}
          onClick={(e) => loginWithRedirect()}
        >
          Log In
          <KeyboardArrowRightIcon />
        </Button>
      )}
    </div>
  );
};

export default LaunchButton;
