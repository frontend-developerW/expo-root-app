export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_LOADER = "UPDATE_LOADER";

export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  username,
});

export const updateLoader = (loader) => {
  return {
    type: UPDATE_LOADER,
    loader,
  };
};
