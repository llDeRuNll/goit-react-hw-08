export const selectIsLoggedIn = (state) => state.authorization.isLoggedIn;
export const selectIsLoading = (state) => state.authorization.isLoading;
export const selectUserName = (state) => state.authorization.user;
export const selectIsRefreshing = (state) => state.authorization.isRefreshing;
